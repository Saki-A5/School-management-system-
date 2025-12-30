import { prisma } from '../db.js';

export const courseRegistration = async (req, res) => {
  let step = "initialization";

  try {
    const { studentId, coursetitle, lecturer } = req.body;

    if (!studentId || !coursetitle || !lecturer) {
      return res.status(400).json({
        error: "studentId, coursetitle and lecturer are required"
      });
    }

    step = "checking if course exists";
    let course = await prisma.course.findFirst({
      where: { coursetitle }
    });

    if (!course) {
      step = "creating course";
      course = await prisma.course.create({
        data: { coursetitle, lecturer }
      });
    }

    step = "checking existing registration";
    const alreadyRegistered = await prisma.courseHistory.findFirst({
      where: {
        studentId,
        courseId: course.id
      }
    });

    if (alreadyRegistered) {
      return res.status(400).json({
        error: "Student already registered for this course"
      });
    }

    step = "creating course registration";
    await prisma.courseHistory.create({
      data: {
        studentId,
        courseId: course.id,
        coursetitle: course.coursetitle
      }
    });

    return res.status(201).json({
      message: "Course registered successfully",
      course
    });

  } catch (error) {
    console.error(`Error during ${step}:`, error);
    return res.status(500).json("Oops! Something Went Wrong");
  }
};


export const getCourseRegistrations = async (req, res) => {
    let step = "initialization";
    try {
      const studentId = Number(req.params.id);
      step = "fetching course registrations";
       if (isNaN(studentId)) {
      return res.status(400).json({ error: "Invalid studentId" });
    }

    step = "fetching registrations";
    const courses = await prisma.courseHistory.findMany({
      where: { studentId },
      include: { course: true }
    });
    return res.status(200).json(courses);
    } catch (error) {
      console.error(`Error during ${step}:`, error);
      return res.status(500).json("Oops! Something Went Wrong");
    }
}