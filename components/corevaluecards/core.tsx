/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8vOZaqFBHsP
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { HeartIcon, LightbulbIcon, UserPlusIcon } from "@/lib/svg";
import { HeartPulseIcon } from "lucide-react";

// Constant for background color
const BG_COLOR = "#0c0e16";

// Interface for CoreValues
interface CoreValues {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Core component
export default function Core() {
  const coreValues: CoreValues[] = [
    {
      icon: <UserPlusIcon className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-4xl mb-4" />,
      title: "Be an owner, Not a renter",
      description: "We all win when Enterpret wins. We play for the team and do what is needed to Make Enterpret win.",
    },
    {
      icon: <div className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-4xl mb-4"><HeartPulseIcon /><HeartIcon className="" /> Garrri</div>,
      title: "Care personally, Challenge directly",
      description: "We care personally for our teammates. We give and ask for direct and actionable feedback.",
    },
    {
      icon: <LightbulbIcon className="text-[#bd1e59] text-4xl mb-4" />,
      title: "Humble growth mindset",
      description: "We carry a mindset of humility, coupled with a strong desire to learn and get better.",
    },
  ];

  return (
    <div className={`bg-${BG_COLOR} text-white p-12`}>
      <h1 className="text-5xl font-bold text-center mb-6">CORE VALUES</h1>
      <p className="text-center text-lg mb-12">
        Core Values are critical behavioral values that we hold everyone accountable for at Enterpret.
      </p>
      <div className="flex justify-center gap-8">
        {coreValues.map((value, index) => (
          <Card key={index} className="w-[300px] bg-[#1c1f2e]">
            <CardHeader>
              {value.icon}
              <CardTitle>{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
