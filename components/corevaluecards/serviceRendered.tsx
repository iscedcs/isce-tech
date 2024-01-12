/**
 * v0 by Vercel.
 * @see https://v0.dev/t/otMb92B3vzj
 */
import { CardTitle, CardHeader, CardDescription, CardContent, Card } from "@/components/ui/card";
import { DatabaseIcon, PieChartIcon, ReplyIcon, SearchIcon, UsersIcon } from "@/lib/svg";

// Interface for Service
interface Service {
  title: string;
  description: string;
  
}
export default function ServiceRendered() {
  const services: Service[] = [
    {
      title: "Source of truth",
      description:
        "Unify all feedback from all sources in a matter of few minutes to get the most comprehensive voice of your customer.",
    },
    {
      title: "Custom Unified Feedback Taxonomy",
      description:
        "Give structure to unstructured customer feedback - customized just for you. Taxonomy adapts to changes in feedback over time.",
    },
    {
      title: "Powerful semantic search",
      description:
        "Uncomplicated Google-like search across all of your feedback. Search for what the user meant, not just how the user said it.",
    },
    {
      title: "User-friendly analytics suite",
      description:
        "Built for powerful insights but easy for non-technical operators with pleasant UI, easy to build dashboards, and automated summaries of relevant data.",
    },
    {
      title: "Partners",
      description:
        "From implementation and onwards, get dedicated data auditors for weekly model refreshes, plus a dedicated CSM partner.",
    },
    {
      title: "Unlimited user seats",
      description:
        "Bring your entire team into Enterpret without prohibitive costs and foster a culture of customer-centric strategy.",
    },
  ];

  return (
    <div className="text-white p-4 md:p-8">
      <div className="flex justify-center mb-6 md:mb-12">
        <h1 className="text-4xl md:text-6xl font-bold">SERVICES RENDERED</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-t rounded-b-lg">
          <Card key={index} className="bg-gray-800 back w-full mt-1 rounded-b-lg rounded-t-none border-none text-white">
            <CardHeader>
              <CardTitle className="h-10">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className=" line-clamp-3">{service.description}</CardDescription>
            </CardContent>
          </Card>
          </div>
        ))}
      </div>
    </div>
  );
}