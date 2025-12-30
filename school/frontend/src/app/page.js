import { Card } from "@/components/ui/Card";
import { OtherCards } from "@/components/ui/OtherCards";
import { WelcomeCard } from "@/components/ui/welcomeCard";

export default function Page() {
  return (
    <div>
      {/* <div className="flex justify-end">Name</div> */}
      <WelcomeCard />
      <p className="mt-8 mb-2">Finance</p>
      <div className="flex justify-between items-start">
        <Card total={0} image="/Group.svg" description="Total Courses" />
        <Card total={3} image="/Group 14.svg" description="Dues Unpaid" />
        <Card total={400} image="/Group 15.svg" description="Level" />
      </div>
      <div className="flex gap-14 mt-8">
        <div className="w-full">
          <p>Others</p>
          <OtherCards
            description={"Session Calendar"}
            text={"View"}
            image={
              "/calendar.svg"
            }
          />
        </div>
        <div className="w-full">
          <p className="flex justify-end text-Purple">See all</p>
          <OtherCards
            description={"Student Information"}
            text={"View"}
            image={"/Group 16.svg"}
          />
        </div>
      </div>
    </div>
  );
}
