import { User } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";

const TEAM_MEMBERS = [
  "Semina Abdihodzic",
  "Johann Aglas",
  "Laura Aigner",
  "Christoph Amon",
  "Ali Attia",
  "Sandra Barth",
  "Benedikt Blumenschein",
  "Daniel Bräuer",
  "Patricia Alexandra Calugar",
  "Ajdin Čaušević",
  "Lukas Cerny",
  "Stefanie Dattl",
  "René De Alvarado y Petterson",
  "Martin Doppelreiter",
  "Jessica Dünker",
  "Noah Egelseer",
  "Sarah Gassner",
  "Kevin Grassegger",
  "Niko Grund",
  "Iris Haghofer",
  "Marcel Hallmann",
  "Johanna Heiligenbrunner",
  "Elmedina Hodzic",
  "Stefanie Jung",
  "Klaudija Jurina",
  "Zeynep Kayacikli",
  "Mona Khosrawi",
  "Agnesa Krasniqi-Halimaj",
  "Isabella Kuderna",
  "Christiane Landauf",
  "Peter Lang",
  "Julia Lehner",
  "Mario Leichtfried",
  "Manuel Linzner",
  "Maria Marckhgott",
  "Katharina Maurer",
  "Katrin Mayrhofer",
  "Simona Metodieva",
  "Steven Mitca",
  "Selina Mitterbauer",
  "Jürgen Neff",
  "Gottfried Nemecek",
  "Martin Nenning",
  "Renate Oliva",
  "Verena Ott",
  "Pascal Parmantye",
  "André Pedersen",
  "Karin Pfeiffer",
  "Tanja Philipps",
  "Bernhard Philipps",
  "Franziska Primbs",
  "Gunhild Reingruber",
  "Christine Rosenthaler",
  "Denise Sampt",
  "Jasmin Schachner",
  "Katharina Schatz",
  "Mike Schidlowski",
  "Bianca Schober",
  "Sabrina Schütz",
  "Karl Schwarz",
  "Georg Steinbacher",
  "Daniela Steinbichler",
  "Sabine Steiner",
  "Oliver Straberger",
  "Andre Stranzinger",
  "Eveline Strasser",
  "Michael Stütz",
  "Lisa Trost",
  "Philipp Voglhofer",
  "Ingo Wagner",
  "Bernadette Wieser",
  "Matthias Wiesflecker",
  "Andreas Wilm",
  "Daniel Wimmer",
  "Lisa-Maria Wurm",
  "Admira Zecic",
];

function getInitials(name: string) {
  const parts = name.split(" ");
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const COLORS = [
  "bg-atikon-violet/10 text-atikon-violet",
  "bg-atikon-orange/10 text-atikon-orange",
  "bg-amber-100 text-amber-700",
  "bg-emerald-100 text-emerald-700",
  "bg-sky-100 text-sky-700",
];

export function TeamGrid() {
  return (
    <SectionShell bg="neutral">
      <SectionHeading
        title="Beratung, Content, Design, Marketing, Technik"
        subtitle="Hier finden Sie Ihre Ansprechpartner bei Atikon."
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {TEAM_MEMBERS.map((name, i) => (
          <div
            key={name}
            className="group flex flex-col items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold ${COLORS[i % COLORS.length]}`}
            >
              {getInitials(name)}
            </div>
            <p className="text-center text-xs font-semibold text-neutral-800 leading-tight">
              {name}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-neutral-500">
        Sie haben noch keinen persönlichen Kontakt bei Atikon? Schreiben Sie uns
        an{" "}
        <a
          href="mailto:info@atikon.com"
          className="font-semibold text-atikon-violet hover:underline"
        >
          info@atikon.com
        </a>{" "}
        oder rufen Sie uns an unter{" "}
        <a
          href="tel:+43732611266"
          className="font-semibold text-atikon-violet hover:underline"
        >
          +43 732 611 266
        </a>
        .
      </p>
    </SectionShell>
  );
}
