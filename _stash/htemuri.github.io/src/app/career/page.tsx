import { Badge } from "@/components/ui/badge";

const generalSkills = [
  "typescript",
  "python",
  "golang",
  "linux",
  "networking",
  "web-development",
  "api-development",
  "iac",
];
const azureSkills = [
  "graph-api",
  "entraid",
  "iam",
  "rbac",
  "app-services",
  "vm-management",
  "vnets",
  "dns-zones",
  "privatelink",
  "storage-accounts",
  "databricks",
  "app-gateway",
  "aks",
  "container-apps",
];

export default function CareerPage() {
  return (
    <div className="flex max-lg:flex-col h-full w-full items-center">
      <div className="h-full overflow-y-auto flex flex-col gap-3  w-full px-6 pt-4">
        <div className="flex items-center">
          {/* <h1 className="font-medium text-xl">Booz Allen Hamilton (BAH)</h1> */}
          <img src="/Booz_Allen_Hamilton_logo.svg" />
          <div className="grow" />
          <span className="text-muted-foreground">2021 - Current</span>
        </div>
        <p className="text-muted-foreground text-pretty leading-7">
          My time at BAH has been a wild ride, full of new experiences and great
          mentors/coworkers. As my first job out of college, I couldn't have
          asked for a better project to learn as much as I did.
        </p>
        <span>Summary of responsibilities:</span>
        <p className="flex flex-col gap-1 text-muted-foreground text-pretty">
          <span>
            - Designed and built internal monitoring and status tooling,
            including outage alerting, uptime tracking, and user-facing status
            pages
          </span>
          <span>
            - Built internal applications to manage user lifecycle workflows,
            including onboarding, inactivity tracking, and automated offboarding
          </span>
          <span>
            - Reduced operational toil through automation, including
            programmatic management of directory services and access controls
          </span>
          <span>
            - Served as a system administrator for Linux-based cloud
            infrastructure in production environments
          </span>
          <span>
            - Architected and operated infrastructure for public-facing
            applications on Azure, with a focus on automation and scalability
          </span>
          <span>
            - Provided technical mentorship and guidance in automation,
            networking, and infrastructure
          </span>
          <span>
            - Acted as a subject matter expert for a data science SaaS platform,
            supporting adoption, reliability, and team enablement
          </span>
        </p>

        <div className="flex gap-3 py-2 items-start">
          <span className="text-green-300">Skills</span>
          <div className="flex flex-wrap gap-2">
            {generalSkills.map((skill) => {
              return (
                <Badge key={skill} variant={"outline"}>
                  {skill}
                </Badge>
              );
            })}
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <span className="text-blue-300">Azure</span>
          <div className="flex flex-wrap gap-2">
            {azureSkills.map((skill) => {
              return (
                <Badge key={skill} variant={"outline"}>
                  {skill}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
