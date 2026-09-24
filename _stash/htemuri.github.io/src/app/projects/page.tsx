import ProjectSteps, { Project } from "@/components/project-steps";

const projects: Project[] = [
  {
    title: "Azure Pulumi Service Broker",
    technologies: ["golang", "iac", "azure", "pulumi"],
    shortDescription:
      "Creating an Azure self-service API replicating what we needed at CDC - using Pulumi instead of Terraform.",
    yearWorked: "2026",
    linkToBlog: "https://htemuri.github.io/0xBADC0DE/projects/service-broker",
    linkToRepo: "https://github.com/htemuri/azure-pulumi-service-broker",
    description: (
      <p>
        The Azure-Pulumi service broker is an gRPC API that allows users to
        provision templated infrastructure to Azure through Pulumi. In practice,
        it solves the problem of needing to supply repeatable infrastructure
        through user requests.
        <br />
        <br />
        The current implementation is a proof of concept with a lot of room for
        improvement if you were to actually deploy it to a production
        environment. My write up for this project in{" "}
        <code className="text-cyan-300 mt-0.5">0xBADC0DE</code> discusses the
        improvements I would make as well as a demo video.
      </p>
    ),
  },
  {
    title: "LC-3b μArchitecture Simulator",
    technologies: ["golang", "comp-arch"],
    shortDescription:
      "A cycle-accurate LC-3b microarchitecture simulator written in Go.",
    yearWorked: "2026",
    linkToBlog: "https://htemuri.github.io/0xBADC0DE/projects/lc3b",
    linkToRepo: "https://github.com/htemuri/lc-3b-sim",
    description: (
      <p>
        This project is a cycle-accurate LC-3b microarchitecture simulator
        implemented in Go that models the full multicycle datapath and
        microcoded control unit, including the control store, microsequencer,
        register file, ALU, and memory system.
        <br />
        <br />
        The simulator executes LC-3b machine code directly, advancing one
        microstate per clock tick with a clear separation between combinational
        logic and state updates to closely mirror real hardware behavior and
        enable detailed architectural experimentation and debugging.
      </p>
    ),
  },
  {
    title: "rust-ipmi",
    technologies: ["rust", "networking"],
    shortDescription:
      "A from-scratch Rust implementation of the IPMI RMCP+ protocol, focused on low-level packet handling, authentication, and reliable communication with BMCs.",
    yearWorked: "2023",
    linkToBlog: "",
    linkToRepo: "https://github.com/htemuri/rust-ipmi",
    description: (
      <p>
        This project is a from-scratch Rust implementation of the IPMI RMCP+
        protocol, designed to communicate directly with Baseboard Management
        Controllers (BMCs) at the packet level. It implements message
        formatting, session establishment, authentication, and command handling
        without relying on existing IPMI libraries, emphasizing protocol
        correctness, safety, and clarity.
        <br />
        <br />
        The project serves both as a practical tool for systems work and as a
        deep dive into network protocols, embedded management interfaces, and
        robust Rust systems programming.
      </p>
    ),
  },
];

export default function ProjectsPage() {
  return (
    <div className="h-full">
      <ProjectSteps
        projects={projects}
        autoPlayInterval={15000}
        className=" h-full overflow-y-scroll"
      />
    </div>
  );
}
