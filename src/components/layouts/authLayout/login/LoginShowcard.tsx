function LoginShowcard() {
  return (
    <div
      className="sm:col-span-1 relative z-0 hidden h-screen w-full overflow-hidden 
            bg-cover sm:block bg-[url(https://asm.darkatlas.io/assets/loginBackground-7a7huzqz.jpg)]">
      <div className="absolute z-10 h-full w-full bg-[#010101a5]"></div>
      <div className="">
        <div className="absolute left-36 top-24 z-20 flex max-w-[500px] flex-col gap-3">
          <h1 className="text-2xl font-semibold">
            We Protect you to the <span className="text-primary">limits</span>!
          </h1>
          <p className="text-base font-normal">
            Dark Atlas is an AI-powered eXtended Cyber Intelligence (XCI) Platform that protects you
            against cyber threats with actionable &amp; contextualized intelligence.
          </p>
        </div>
        <img
          className="absolute left-32 top-72 z-20 h-screen w-full max-w-full rotate-[-7.934deg] skew-x-3 object-cover object-left shadow-2xl shadow-primary-20"
          src="https://asm.darkatlas.io/assets/loginDashAsm-Bzk4Hobu.png"
        />
      </div>
    </div>
  );
}

export default LoginShowcard;
