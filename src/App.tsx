import { useState } from "react";
import { Heart, TrendingUp, Zap, Eye, CheckCircle2 } from "lucide-react";
import handHeldPhoneGradient from "./assets/hand-held-phone-gradient-bg.png";
import handHeldPhoneNoBg from "./assets/hand-held-phone-no-bg.png";

function App() {
    const [activeTab, setActiveTab] = useState<"rotating" | "yield">(
        "rotating"
    );

    return (
        <main className="min-h-screen bg-[#0B0917] relative overflow-hidden">
            {/* Navigation */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white backdrop-blur-md
                }`}
            >
                <div className="border-b mb-4">
                    <span className="text-[14px] text-black px-3 py-1.5 bg-transparent font-space-grotesk font-normal">
                        Built on polygon
                    </span>
                </div>
                <div className="max-w-[1440px] mx-auto px-[50px] pb-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[75px]">
                            <div className="flex items-center gap-4">
                                <span className="text-[22px] text-black font-space-grotesk font-bold leading-[1.276]">
                                    POOLSAVE
                                </span>
                            </div>
                            <div className="hidden md:flex items-center gap-[42px]">
                                <a
                                    href="#products"
                                    className="text-black text-[14px] font-space-grotesk font-normal hover:opacity-80 transition-opacity"
                                >
                                    Products
                                </a>
                                <a
                                    href="#faqs"
                                    className="text-black text-[14px] font-space-grotesk font-normal hover:opacity-80 transition-opacity"
                                >
                                    FAQS
                                </a>
                                <a
                                    href="#blogs"
                                    className="text-black text-[14px] font-space-grotesk font-normal hover:opacity-80 transition-opacity"
                                >
                                    Blogs
                                </a>
                            </div>
                        </div>
                        <button className="bg-black text-white px-[10px] py-[10px] rounded-[100px] font-space-grotesk font-medium text-[16px] leading-[1.276] w-[141px] h-[48px] flex items-center justify-center hover:opacity-90 transition-opacity">
                            Launch App
                        </button>
                    </div>
                </div>
            </nav>

            {/* Divider Line */}
            <div className="fixed top-[98px] left-0 right-0 h-[0.3px] bg-[#C4C4C4] z-40"></div>

            {/* Hero Section */}
            <section className="pt-[196px] px-[50px] relative z-10">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col items-center justify-between gap-12">
                        <div className="w-[60%] flex flex-col items-center justify-center text-center sm:text-left">
                            <h1 className="text-[50px] font-space-grotesk font-bold leading-[1.276] mb-[16px] text-white">
                                SAVE TOGETHER, GROW TOGETHER
                            </h1>
                            <p className="text-[20px] font-inter font-light leading-[1.5] mb-[24px] text-white text-center sm:text-left">
                                PoolSave brings community savings on-chain.
                                Choose traditional rotating payouts or pool your
                                funds together for stablecoin yield.all
                                transparent, gasless, and built on Polygon.
                            </p>
                            <div className="flex items-center justify-center sm:justify-start">
                                <button className="bg-[#FAADE9] text-black px-[10px] py-[10px] rounded-[100px] font-space-grotesk font-bold text-[16px] leading-[1.276] w-[170px] h-[48px] flex items-center justify-center hover:opacity-90 transition-opacity">
                                    Launch App
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src={handHeldPhoneGradient}
                                alt="PoolSave App"
                                className="w-[500px] h-[500px] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Two Ways to Save Section */}
            <section className="py-20 px-[120px] relative z-10 bg-white">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex justify-between">
                        <div className="mb-[60px]">
                            <h2 className="text-[40px] font-space-grotesk font-bold leading-[1.276] mb-[16px] text-black">
                                Two Ways to Save
                            </h2>
                            <p className="text-[20px] font-inter font-normal leading-[1.21] text-black">
                                Choose the savings model that works best for
                                your community.
                            </p>
                        </div>

                        {/* Tabs */}
                        <div className="mb-[60px]">
                            <div className="relative w-[293px] h-[72px] bg-[#F5F5F5] rounded-[100px] p-[13px]">
                                <button
                                    onClick={() => setActiveTab("rotating")}
                                    className={`absolute top-[13px] left-[16px] w-[163px] h-[46px] rounded-[100px] font-space-grotesk font-medium text-[16px] leading-[1.276] transition-all ${
                                        activeTab === "rotating"
                                            ? "bg-[#0B0917] text-white"
                                            : "bg-transparent text-black"
                                    }`}
                                >
                                    Rotating Savings
                                </button>
                                <button
                                    onClick={() => setActiveTab("yield")}
                                    className={`absolute top-[26px] right-[16px] font-space-grotesk font-medium text-[16px] leading-[1.276] transition-all ${
                                        activeTab === "yield"
                                            ? "text-white"
                                            : "text-black"
                                    }`}
                                >
                                    Yield Pool
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Tab Content */}
                    {activeTab === "rotating" && (
                        <div className="bg-[#0B0917] rounded-[16px] p-[40px]">
                            <h3 className="text-[28px] font-space-grotesk font-bold leading-[1.276] mb-[16px] text-white">
                                Rotating Savings Pool
                            </h3>
                            <p className="text-[20px] font-inter font-light leading-[1.5] mb-[40px] text-white">
                                The classic community savings model you know and
                                trust — now digital with yield. Members
                                contribute monthly, and one member receives the
                                full pot each round. Plus, all pooled funds earn
                                yield that rotates to a member every 30 days.
                            </p>
                            <div className="space-y-[40px]">
                                <div className="flex items-start gap-[16px]">
                                    <div className="w-[35px] h-[35px] bg-[#F5F5F5] rounded-[25px] flex items-center justify-center flex-shrink-0">
                                        <span className="text-black font-space-grotesk font-medium text-[20px] leading-[1.5]">
                                            1
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-inter font-normal text-[20px] leading-[1.5] mb-[4px] text-white">
                                            Join a pool
                                        </h4>
                                        <p className="font-inter font-light text-[16px] leading-[1.875] text-white">
                                            Set your contribution amount and
                                            cycle length (weekly, bi-weekly, or
                                            monthly).
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-[16px]">
                                    <div className="w-[35px] h-[35px] bg-[#F5F5F5] rounded-[25px] flex items-center justify-center flex-shrink-0">
                                        <span className="text-black font-space-grotesk font-medium text-[20px] leading-[1.5]">
                                            2
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-inter font-normal text-[20px] leading-[1.5] mb-[4px] text-white">
                                            Contribute each circle
                                        </h4>
                                        <p className="font-inter font-light text-[16px] leading-[1.875] text-white">
                                            Pay your share on time. Automated
                                            reminders keep everyone on track.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-[16px]">
                                    <div className="w-[35px] h-[35px] bg-[#F5F5F5] rounded-[25px] flex items-center justify-center flex-shrink-0">
                                        <span className="text-black font-space-grotesk font-medium text-[20px] leading-[1.5]">
                                            3
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-inter font-normal text-[20px] leading-[1.5] mb-[4px] text-white">
                                            Receive Your Payout
                                        </h4>
                                        <p className="font-inter font-light text-[16px] leading-[1.875] text-white">
                                            When it's your turn, you receive the
                                            full lump sum from all members.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Why PoolSave Section */}
            <section className="py-20 px-[50px] relative z-10 bg-white">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-[60px] max-w-[743px] mx-auto">
                        <h2 className="text-[40px] font-space-grotesk font-bold leading-[1.276] mb-[16px] text-black">
                            Why PoolSave?
                        </h2>
                        <p className="text-[20px] font-inter font-normal leading-[1.21] text-black">
                            The features that make community saving simple,
                            trustworthy, and productive.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
                        {/* Built for real communities */}
                        <div className="bg-[rgba(250,173,233,0.2)] rounded-[16px] p-[24px]">
                            <div className="flex flex-col gap-[16px]">
                                <div className="w-[40px] h-[40px] bg-[#0B0917] rounded-[8px] flex items-center justify-center flex-shrink-0">
                                    <Heart className="w-[24px] h-[24px] text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-inter font-semibold text-[16px] leading-[1.21] mb-[8px] text-black">
                                        Built for real communities
                                    </h3>
                                    <p className="font-inter font-normal text-[14px] leading-[1.786] text-black">
                                        Inspired by traditional systems like
                                        Ajo, tanda, and stokvel, just safer and
                                        more productive.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Earn Yield Not Just a Payout */}
                        <div className="bg-[rgba(250,173,233,0.2)] rounded-[16px] p-[24px]">
                            <div className="flex flex-col gap-[16px]">
                                <div className="w-[40px] h-[40px] bg-[#0B0917] rounded-[8px] flex items-center justify-center flex-shrink-0">
                                    <TrendingUp className="w-[24px] h-[24px] text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-inter font-semibold text-[16px] leading-[1.21] mb-[8px] text-black">
                                        Earn Yield Not Just a Payout
                                    </h3>
                                    <p className="font-inter font-normal text-[14px] leading-[1.786] text-black">
                                        Unlike classical ROSCAs, PoolSave
                                        converts pooled capital into yield and
                                        rotates earnings among members.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Low Cost and Fast */}
                        <div className="bg-[rgba(250,173,233,0.2)] rounded-[16px] p-[24px]">
                            <div className="flex flex-col gap-[16px]">
                                <div className="w-[40px] h-[40px] bg-[#0B0917] rounded-[8px] flex items-center justify-center">
                                    <Zap className="w-[24px] h-[24px] text-white" />
                                </div>
                                <div className="">
                                    <h3 className="font-inter font-semibold text-[16px] leading-[1.21] mb-[8px] text-black">
                                        Low Cost and Fast
                                    </h3>
                                    <p className="font-inter font-normal text-[14px] leading-[1.786] text-black">
                                        Built on Polygon for low fees and fast
                                        confirmation. Gasless UX removes the
                                        crypto barrier.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Transparent and Secure */}
                        <div className="bg-[rgba(250,173,233,0.2)] rounded-[16px] p-[24px]">
                            <div className="flex flex-col gap-[16px]">
                                <div className="w-[40px] h-[40px] bg-[#0B0917] rounded-[8px] flex items-center justify-center">
                                    <Eye className="w-[24px] h-[24px] text-white" />
                                </div>
                                <div className="">
                                    <h3 className="font-inter font-semibold text-[16px] leading-[1.21] mb-[8px] text-black">
                                        Transparent and Secure
                                    </h3>
                                    <p className="font-inter font-normal text-[14px] leading-[1.786] text-black">
                                        Smart contracts automate the rules,
                                        while clear logs and reputation scores
                                        keep groups honest.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Markets We Serve Section */}
            <section className="py-20 px-[50px] relative z-10 bg-white">
                <div className="max-w-[1440px] mx-auto">
                    <div className="bg-white rounded-[16px] p-[55px]">
                        <div className="text-center mb-[40px] max-w-[743px] mx-auto">
                            <h2 className="text-[40px] font-space-grotesk font-bold leading-[1.276] mb-[16px] text-black">
                                Markets We Serve
                            </h2>
                            <p className="text-[20px] font-inter font-normal leading-[1.21] text-black">
                                PoolSave is built for communities where group
                                saving thrives.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center items-center gap-[16px] max-w-[640px] mx-auto">
                            {[
                                { name: "Nigeria", flag: "🇳🇬" },
                                { name: "Ghana", flag: "🇬🇭" },
                                { name: "Brasil", flag: "🇧🇷" },
                                { name: "Mexico", flag: "🇲🇽" },
                            ].map((country, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#F8F7F7] rounded-[100px] px-[30px] py-[13px] flex items-center gap-[8px] h-[50px]"
                                >
                                    <span className="text-2xl">
                                        {country.flag}
                                    </span>
                                    <span className="font-inter font-semibold text-[16px] leading-[1.21] text-[#180E26]">
                                        {country.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-[6px] max-w-[640px] mx-auto mt-[30px]">
                            {[
                                { name: "Kenya", flag: "🇰🇪" },
                                { name: "Peru", flag: "🇵🇪" },
                            ].map((country, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#F8F7F7] rounded-[100px] px-[34px] py-[13px] flex items-center gap-[8px] h-[50px]"
                                >
                                    <span className="text-2xl">
                                        {country.flag}
                                    </span>
                                    <span className="font-inter font-semibold text-[16px] leading-[1.21] text-[#180E26]">
                                        {country.name}
                                    </span>
                                </div>
                            ))}
                            <div className="bg-[#F8F7F7] rounded-[100px] px-[33px] py-[15.5px] flex items-center h-[50px]">
                                <span className="font-inter font-semibold text-[16px] leading-[1.21] text-[#180E26]">
                                    and more..
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Section */}
            <section className="pt-20 px-[50px] relative z-10">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex items-center ">
                        <div className="flex-1 flex justify-center">
                            <img
                                src={handHeldPhoneNoBg}
                                alt="PoolSave Security"
                                className="w-[395px] h-[545px] object-contain"
                            />
                        </div>
                        <div className="flex-1 ">
                            <h2 className="text-[40px] font-space-grotesk font-bold leading-[1.276] mb-[9px] text-white">
                                Security you can trust.
                            </h2>
                            <p className="text-[20px] font-inter font-light leading-[1.5] mb-[37px] text-white">
                                Your pools use audited contracts and
                                conservative strategies. Nothing hidden.
                            </p>
                            <div className="space-y-[24px]">
                                {[
                                    "Audited smart contracts",
                                    "Conservative stablecoin strategies",
                                    "Transparent on-chain rotation",
                                    "Gasless — no MATIC needed",
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-[14px]"
                                    >
                                        <CheckCircle2 className="w-[24px] h-[24px] text-[#92FCD9] flex-shrink-0" />
                                        <span className="font-inter font-normal text-[16px] leading-[1.21] text-white">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ready to Save Smarter CTA */}
            <section className="py-20 px-[50px] relative z-10 bg-white">
                <div className="max-w-[1440px] mx-auto my-20">
                    <div className="text-center max-w-[403px] mx-auto">
                        <h2 className="text-[50px] font-space-grotesk font-bold leading-[1.276] mb-[16px] text-black">
                            Ready to save smarter?
                        </h2>
                        <p className="text-[20px] font-inter font-light leading-[1.5] mb-[24px] text-black">
                            Take your Ajo online. Earn yield. Keep trust.
                        </p>
                        <button className="bg-black text-white px-[10px] py-[10px] rounded-[100px] font-space-grotesk font-medium text-[16px] leading-[1.276] w-[141px] h-[48px] flex items-center justify-center mx-auto hover:opacity-90 transition-opacity">
                            Launch App
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-[44px] px-[50px] bg-[#0B0917] relative z-10">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-[16px] font-space-grotesk font-bold leading-[1.276] text-white">
                            POOLSAVE
                        </div>
                        <div className="flex items-center gap-[24px]">
                            <a
                                href="#"
                                className="font-inter font-normal text-[16px] leading-[1.21] text-[#B9B6B6] hover:text-white transition-colors"
                            >
                                Privacy
                            </a>
                            <a
                                href="#"
                                className="font-inter font-normal text-[16px] leading-[1.21] text-[#B9B6B6] hover:text-white transition-colors"
                            >
                                Terms
                            </a>
                            <a
                                href="#"
                                className="font-inter font-normal text-[16px] leading-[1.21] text-[#B9B6B6] hover:text-white transition-colors"
                            >
                                Contact
                            </a>
                        </div>
                        <div className="font-inter font-normal text-[16px] leading-[1.21] text-[#B9B6B6]">
                            © 2025 PoolSave
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default App;
