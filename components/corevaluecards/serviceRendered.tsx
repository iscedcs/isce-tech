/**
 * v0 by Vercel.
 * @see https://v0.dev/t/otMb92B3vzj
 */
import { CardTitle, CardHeader, CardDescription, CardContent, Card } from "@/components/ui/card";
import { DatabaseIcon, PieChartIcon, ReplyIcon, SearchIcon, UsersIcon } from "@/lib/svg";

// Constant for background color
const BG_COLOR = "#0c0e16";

// Interface for Service
interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

// ServiceRendered component
export default function ServiceRendered() {
  const services: Service[] = [
    {
      icon: <DatabaseIcon className="text-3xl text-[#ff5252]" />,
      title: "Source of truth",
      description:
        "Unify all feedback from all sources in a matter of few minutes to get the most comprehensive voice of your customer.",
      color: "#1c1f2e",
    },
    {
      icon: <ReplyIcon className="text-3xl text-[#34ace0]" />,
      title: "Custom Unified Feedback Taxonomy",
      description:
        "Give structure to unstructured customer feedback - customized just for you. Taxonomy adapts to changes in feedback over time.",
      color: "#1c1f2e",
    },
    {
      icon: <SearchIcon className="text-3xl text-[#ffb142]" />,
      title: "Powerful semantic search",
      description:
        "Uncomplicated Google-like search across all of your feedback. Search for what the user meant, not just how the user said it.",
      color: "#1c1f2e",
    },
    {
      icon: <PieChartIcon className="text-3xl text-[#ff5252]" />,
      title: "User-friendly analytics suite",
      description:
        "Built for powerful insights but easy for non-technical operators with pleasant UI, easy to build dashboards, and automated summaries of relevant data.",
      color: "#1c1f2e",
    },
    {
      icon: <UsersIcon className="text-3xl text-[#34ace0]" />,
      title: "Partners",
      description:
        "From implementation and onwards, get dedicated data auditors for weekly model refreshes, plus a dedicated CSM partner.",
      color: "#1c1f2e",
    },
    {
      icon: <UsersIcon className="text-3xl text-[#ffb142]" />,
      title: "Unlimited user seats",
      description:
        "Bring your entire team into Enterpret without prohibitive costs and foster a culture of customer-centric strategy.",
      color: "#1c1f2e",
    },
  ];

  return (
    <div className={`bg-${BG_COLOR} text-white p-8`}>
      <div className="flex justify-center mb-12">
        <h1 className="text-6xl font-bold">SERVICES RENDERED</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className='bg-[#1c1f2e] border-t-4)'>
            <CardHeader>
              {service.icon}
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
