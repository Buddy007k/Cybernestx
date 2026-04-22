import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Team() {
  const team = [
    { name: "Aman Sharma", role: "Founder & CEO" },
    { name: "Rahul Verma", role: "Technical Lead" },
    { name: "Priya Singh", role: "UI/UX Designer" },
    { name: "Neha Gupta", role: "Marketing Manager" },
  ];

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 text-center">
        <h1 className="text-4xl font-bold">Our Team</h1>
      </section>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 pb-20">
        {team.map((t, i) => (
          <div key={i} className="p-6 shadow rounded-xl text-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4" />
            <h3 className="font-semibold">{t.name}</h3>
            <p className="text-sm">{t.role}</p>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}