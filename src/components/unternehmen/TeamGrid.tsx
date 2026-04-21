import { useState, useCallback } from "react";
import { Phone, Mail } from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";

interface TeamMember {
  name: string;
  title?: string;
  role?: string;
  phone: string;
  email: string;
  photo: string;
}

const TEAM: TeamMember[] = [
  { name: "Semina Abdihodzic", phone: "+43 732 611266-630", email: "semina.abdihodzic@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e557/photo/ger/SHAL_Semina_Abdihodzic_20230725_web.jpg" },
  { name: "Johann Aglas", title: "Mag.", phone: "+43 732 611266-152", email: "johann.aglas@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e549/photo/ger/JA_Johann_Aglas_20230725_web.jpg" },
  { name: "Laura Aigner", phone: "+43 732 611266-756", email: "laura.aigner@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e5321/photo/ger/LAI.jpg" },
  { name: "Christoph Amon", role: "Geschäftsführung", phone: "+43 732 611266-151", email: "christoph.amon@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e6851/photo/ger/CAM_web.jpg" },
  { name: "Ali Attia", phone: "+43 732 611266-505", email: "ali.attia@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e527/photo/ger/AAT.jpg" },
  { name: "Sandra Barth", phone: "+43 732 611266-807", email: "sandra.barth@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e533/photo/ger/SBA.jpg" },
  { name: "Benedikt Blumenschein", phone: "+43 732 611266-639", email: "benedikt.blumenschein@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e556/photo/ger/BBL_Benedikt_Blumenschein_20230725_web.jpg" },
  { name: "Daniel Bräuer", phone: "+43 732 611266-362", email: "daniel.braeuer@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e553/photo/ger/DBR_Daniel_Braeuer_20230725_web.jpg" },
  { name: "Patricia Alexandra Calugar", phone: "+43 732 611266-368", email: "alexandra.calugar@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e6591/photo/ger/PCneu.png" },
  { name: "Ajdin Čaušević", phone: "+43 732 611266-511", email: "ajdin.causevic@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e6500/photo/ger/ACA.jpg" },
  { name: "Lukas Cerny", phone: "+43 732 611266-704", email: "lukas.cerny@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e5651/photo/ger/LCE.jpg" },
  { name: "Stefanie Dattl", phone: "+43 732 611266-755", email: "stefanie.dattl@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e545/photo/ger/SEL_Stefanie_Dattl_20230725_web.jpg" },
  { name: "René De Alvarado y Petterson", phone: "+43 732 611266-506", email: "rene.de.alvarado@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e577/photo/ger/RD_Ren%C3%A9_De_Alvaradoo_20230803_web.jpg" },
  { name: "Martin Doppelreiter", phone: "+43 732 611266-504", email: "martin.doppelreiter@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e567/photo/ger/MDO_Martin_Doppelreiter_20230725_web.jpg" },
  { name: "Jessica Dünker", phone: "+43 732 611266-552", email: "jessica.duenker@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e572/photo/ger/JDU_Jessica_Duenker_20230725_web.jpg" },
  { name: "Noah Egelseer", phone: "+43 732 611266-370", email: "noah.egelseer@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e7366/photo/ger/NEG.jpg" },
  { name: "Sarah Gassner", phone: "+43 732 611266-375", email: "sarah.gassner@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e7363/photo/ger/SGA.jpg" },
  { name: "Kevin Grassegger", phone: "+43 732 611266-406", email: "kevin.grassegger@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e6502/photo/ger/KGR.jpg" },
  { name: "Niko Grund", phone: "+43 732 611266-404", email: "nikola.grund@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e591/photo/ger/NGR_Niko_Grund_20230725_web.jpg" },
  { name: "Iris Haghofer", phone: "+43 732 611266-816", email: "iris.koenig@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e568/photo/ger/IK_Iris_Haghofer_20230803_web.jpg" },
  { name: "Marcel Hallmann", phone: "+43 732 611266-509", email: "marcel.hallmann@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e5848/photo/ger/MHAL.jpg" },
  { name: "Johanna Heiligenbrunner", phone: "+43 732 611266-553", email: "johanna.heiligenbrunner@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e563/photo/ger/JHE_Johanna_Heiligenbrunner_20230725_web.jpg" },
  { name: "Elmedina Hodzic", phone: "+43 732 611266-753", email: "elmedina.hodzic@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e535/photo/ger/EHO.jpg" },
  { name: "Stefanie Jung", role: "in Karenz", phone: "+43 732 611266-801", email: "stefanie.jung@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e582/photo/ger/SZ_Stefanie_Jung_20230725_web.jpg" },
  { name: "Klaudija Jurina", role: "in Karenz", phone: "+43 732 611266", email: "klaudija.milic@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e578/photo/ger/KM_Klaudija_Jurina_20230725_web.jpg" },
  { name: "Zeynep Kayacikli", phone: "+43 732 611266-366", email: "zeynep.kayacikli@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e9114/photo/ger/zka.jpg" },
  { name: "Mona Khosrawi", phone: "+43 732 611266-363", email: "mona.khosrawi@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e9116/photo/ger/mkh.jpg" },
  { name: "Agnesa Krasniqi-Halimaj", phone: "+43 732 611266-513", email: "agnesa.krasniqi-halimaj@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e9118/photo/ger/akra.jpg" },
  { name: "Isabella Kuderna", phone: "+43 732 611266-810", email: "isabella.kuderna@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e7279/photo/ger/IKU.jpg" },
  { name: "Christiane Landauf", title: "Mag.", role: "Human Resources", phone: "+43 732 611266-252", email: "christiane.landauf@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e596/photo/ger/CLA_Christiane_Landauf_20230725_web.jpg" },
  { name: "Peter Lang", phone: "+43 732 611266-771", email: "peter.lang@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e559/photo/ger/PLA_Peter_Lang_20230725_web.jpg" },
  { name: "Julia Lehner", phone: "+43 732 611266-802", email: "julia.lehner@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e590/photo/ger/JLN_Julia_Lehner_20230725_web.jpg" },
  { name: "Mario Leichtfried", title: "BA", phone: "+43 732 611266-812", email: "mario.leichtfried@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e551/photo/ger/MLE_Mario_Leichtfried_20230725_web.jpg" },
  { name: "Manuel Linzner", phone: "+43 732 611266-307", email: "manuel.linzner@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e7126/photo/ger/MLIN_web.jpg" },
  { name: "Maria Marckhgott", phone: "+43 732 611266-558", email: "maria.marckhgott@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e585/photo/ger/MK_Maria_Marckhgott_20230725_web.jpg" },
  { name: "Katharina Maurer", phone: "+43 732 611818", email: "katharina.maurer@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e598/photo/ger/KPO.jpg" },
  { name: "Katrin Mayrhofer", role: "in Karenz", phone: "+43 732 611266-501", email: "katrin.mayrhofer@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e554/photo/ger/KMA_Katrin_Mayrhofer_20230725_web.jpg" },
  { name: "Simona Metodieva", phone: "+43 732 611266-255", email: "simona.metodieva@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e4802/photo/ger/SME_Simona_Metodieva_20230725_web.jpg" },
  { name: "Steven Mitca", phone: "+43 732 611266-301", email: "steven.mitca@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e9115/photo/ger/smit.jpg" },
  { name: "Selina Mitterbauer", phone: "+43 732 611266-754", email: "selina.mitterbauer@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e607/photo/ger/SMI.jpg" },
  { name: "Jürgen Neff", phone: "+43 732 611266-305", email: "juergen.neff@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e586/photo/ger/JN_Juergen_Neff_20230725_web.jpg" },
  { name: "Gottfried Nemecek", title: "Mag.", phone: "+43 732 611266-254", email: "gottfried.nemecek@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e547/photo/ger/GN_Gottfried_Nemecek_20230725_web.jpg" },
  { name: "Martin Nenning", title: "Dipl.-Ing.", phone: "+43 732 611266-808", email: "martin.nenning@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e576/photo/ger/MN_Martin_Nenning_20230725_web.jpg" },
  { name: "Renate Oliva", phone: "+43 732 611266-253", email: "renate.oliva@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e540/photo/ger/RO_Renate_Oliva_20230725_web.jpg" },
  { name: "Verena Ott", phone: "+43 732 611266-804", email: "verena.ott@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e7125/photo/ger/VOT_web.jpg" },
  { name: "Pascal Parmantye", phone: "+43 732 611266-257", email: "pascal.parmantye@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e7266/photo/ger/PPA.jpg" },
  { name: "André Pedersen", phone: "+43 732 611266-301", email: "andre.pedersen@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e6503/photo/ger/APE_Andre_Pedersen_20230725_web.jpg" },
  { name: "Karin Pfeiffer", phone: "+43 732 611266-303", email: "karin.pfeiffer@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e564/photo/ger/KP_web.jpg" },
  { name: "Tanja Philipps", phone: "+43 732 611266-405", email: "tanja.philipps@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e579/photo/ger/TW.jpg" },
  { name: "Bernhard Philipps", phone: "+43 732 611266-883", email: "bernhard.philipps@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e5316/photo/ger/BP.jpg" },
  { name: "Franziska Primbs", phone: "+43 732 611266-751", email: "franziska.primbs@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e604/photo/ger/FP_Franziska_Primbs_20230725_web.jpg" },
  { name: "Gunhild Reingruber", phone: "+43 732 611266-773", email: "gunhild.reingruber@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e583/photo/ger/GR_Gunhild_Reingruber_20230725_web.jpg" },
  { name: "Christine Rosenthaler", phone: "+43 732 611266-702", email: "christine.rosenthaler@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e597/photo/ger/CRO_Christine_Rosenthaler_20230725_web.jpg" },
  { name: "Denise Sampt", phone: "+43 732 611266-365", email: "denise.sampt@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e565/photo/ger/DSA_Denise_Sampt_20230725_web.jpg" },
  { name: "Jasmin Schachner", phone: "+43 732 611266-806", email: "jasmin.schachner@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e555/photo/ger/JSC_Jasmin_Schachner_20230725_web.jpg" },
  { name: "Katharina Schatz", phone: "+43 732 611266-809", email: "katharina.schatz@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e580/photo/ger/KAS_Katharina_Schatz_20230725_web.jpg" },
  { name: "Mike Schidlowski", phone: "+43 732 611266-403", email: "mike.schidlowski@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e5319/photo/ger/MSC.jpg" },
  { name: "Bianca Schober", phone: "+43 732 611266-401", email: "bianca.schober@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e534/photo/ger/BSCH_Bianca_Schober_20230725_web.jpg" },
  { name: "Sabrina Schütz", title: "B.A.", phone: "+43 732 611266-813", email: "sabrina.schuetz@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e566/photo/ger/SSC_Sabrina_Schuetz_20230725_web.jpg" },
  { name: "Karl Schwarz", title: "Mag.", phone: "+43 732 611266-304", email: "karl.schwarz@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e550/photo/ger/KS_Karl_Schwarz_20230725_web.jpg" },
  { name: "Georg Steinbacher", phone: "+43 732 611266-153", email: "georg.steinbacher@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e9260/photo/ger/gst_web.jpg" },
  { name: "Daniela Steinbichler", phone: "+43 732 611266-805", email: "daniela.steinbichler@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e609/photo/ger/DHA_Daniela_Hansekowitz_20230725_web.jpg" },
  { name: "Sabine Steiner", phone: "+43 732 611266-306", email: "sabine.steiner@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e595/photo/ger/SST_051223.jpg" },
  { name: "Oliver Straberger", phone: "+43 732 611266-882", email: "oliver.straberger@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e536/photo/ger/OS_Oliver_Straberger_20230725_web.jpg" },
  { name: "Andre Stranzinger", phone: "+43 732 611266-377", email: "andre.stranzinger@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e7365/photo/ger/ASTR.jpg" },
  { name: "Eveline Strasser", phone: "+43 732 611266-556", email: "eveline.strasser@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e548/photo/ger/ES_Eveline_Strasser_20230725_web.jpg" },
  { name: "Michael Stütz", phone: "+43 732 611266-772", email: "michael.stuetz@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e558/photo/ger/MS_web.jpg" },
  { name: "Lisa Trost", phone: "+43 732 611266-256", email: "lisa.trost@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e7768/photo/ger/LisaTrost_LTR_komp.jpg" },
  { name: "Philipp Voglhofer", phone: "+43 732 611266-508", email: "philipp.voglhofer@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e584/photo/ger/PV__Philipp_Voglhofer_20230725_web.jpg" },
  { name: "Ingo Wagner", phone: "+43 732 611266-815", email: "ingo.wagner@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e575/photo/ger/IW_Ingo_Wagner_20230725_web.jpg" },
  { name: "Bernadette Wieser", phone: "+43 732 611266-201", email: "bernadette.wieser@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e543/photo/ger/BW_Bernadette_Wieser_20230725_web.jpg" },
  { name: "Matthias Wiesflecker", phone: "+43 732 611266-373", email: "matthias.wiesflecker@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e7265/photo/ger/MWIE.jpg" },
  { name: "Andreas Wilm", phone: "+43 732 611266-402", email: "andreas.wilm@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e6501/photo/ger/AWI_Andreas_Wilm_20230725_web.jpg" },
  { name: "Daniel Wimmer", phone: "+43 732 611266-701", email: "daniel.wimmer@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e570/photo/ger/DW_Daniel_Wimmer_20230725_web.jpg" },
  { name: "Lisa-Maria Wurm", phone: "+43 732 611266-703", email: "lisa-maria.wurm@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e581/photo/ger/LW_Lisa-Maria_Wurm_20230725_web.jpg" },
  { name: "Admira Zecic", phone: "+43 732 611266-259", email: "admira.zecic@atikon.com", photo: "https://www.atikon.com/static/content/e4/e48/e75/e9117/photo/ger/aze.jpg" },
];

const FALLBACK_COLORS = [
  "bg-atikon-violet/10 text-atikon-violet",
  "bg-atikon-orange/10 text-atikon-orange",
  "bg-amber-100 text-amber-700",
  "bg-emerald-100 text-emerald-700",
  "bg-sky-100 text-sky-700",
];

function getInitials(name: string) {
  const parts = name.split(" ");
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function displayName(m: TeamMember) {
  if (m.title) return `${m.title} ${m.name}`;
  return m.name;
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const [imgError, setImgError] = useState(false);
  const [active, setActive] = useState(false);

  const toggle = useCallback(() => setActive((v) => !v), []);

  return (
    <div
      className="group relative flex flex-col items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
      onClick={toggle}
    >
      {/* Photo or fallback initials */}
      <div className="relative h-20 w-20 shrink-0">
        {!imgError ? (
          <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            className="h-20 w-20 rounded-full object-cover object-top"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className={`flex h-20 w-20 items-center justify-center rounded-full text-lg font-bold ${FALLBACK_COLORS[index % FALLBACK_COLORS.length]}`}
          >
            {getInitials(member.name)}
          </div>
        )}
      </div>

      {/* Name + optional role */}
      <div className="text-center">
        <p className="text-xs font-semibold text-neutral-800 leading-tight">
          {displayName(member)}
        </p>
        {member.role && (
          <p className="mt-0.5 text-[10px] text-atikon-violet font-medium">
            {member.role}
          </p>
        )}
      </div>

      {/* Contact overlay — visible on hover (desktop) or click/tap (mobile) */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl bg-white/95 backdrop-blur-sm p-3 transition-all duration-200 ${
          active
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
        }`}
      >
        <p className="text-xs font-semibold text-neutral-900 text-center leading-tight">
          {displayName(member)}
        </p>
        {member.role && (
          <span className="text-[10px] font-medium text-atikon-violet">
            {member.role}
          </span>
        )}
        <a
          href={`tel:${member.phone.replace(/\s/g, "")}`}
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 text-[11px] text-neutral-600 hover:text-atikon-violet transition-colors"
        >
          <Phone size={12} className="shrink-0" />
          <span>{member.phone}</span>
        </a>
        <a
          href={`mailto:${member.email}`}
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 text-[11px] text-neutral-600 hover:text-atikon-violet transition-colors break-all text-center"
        >
          <Mail size={12} className="shrink-0" />
          <span>{member.email}</span>
        </a>
      </div>
    </div>
  );
}

export function TeamGrid() {
  return (
    <SectionShell bg="neutral">
      <SectionHeading
        title="Beratung, Content, Design, Marketing, Technik"
        subtitle="Hier finden Sie Ihre Ansprechpartner bei Atikon."
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {TEAM.map((member, i) => (
          <TeamCard key={member.email} member={member} index={i} />
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
