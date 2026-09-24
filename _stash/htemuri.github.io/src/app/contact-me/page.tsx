export default function ContactMePage() {
  return (
    <div className="flex flex-col gap-3 px-5 py-3">
      <h1 className="">You can reach me via these methods:</h1>
      <div className="flex flex-col gap-2">
        <span>
          Email:{" "}
          <a href="mailto:harris.temuri@gmail.com" className="text-blue-300">
            harris.temuri@gmail.com
          </a>
        </span>
        <span>
          Linked:{" "}
          <a
            href="https://www.linkedin.com/in/harris-temuri/"
            className="text-blue-300"
          >
            linkedin.com/in/harris-temuri
          </a>
        </span>
        <span>
          GitHub:{" "}
          <a href="https://github.com/htemuri" className="text-blue-300">
            github.com/htemuri
          </a>
        </span>
      </div>
    </div>
  );
}
