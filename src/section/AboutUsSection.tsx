import { SectionTitle } from "@/components/shared";

const ServiceSection = () => {
  return (
    <section className="bg-blue pt-40 pb-44">
      <div className=" container-fluid text-white">
        <SectionTitle className="mb-20" title="Biz haqimizda"/>
        <h2 className="text-[150px] -tracking-[6px] leading-[110.00000000000001%] mb-20">
          iPost Xitoy bilan O‘zbekiston orasidagi ishonchli ko‘prik!
        </h2>
        <div className="flex gap-[150px]">
          <p className="w-[98%] text-[32px] font-medium">
            iPost cargo — Xitoydan O‘zbekistonga yuk va tovarlarni tez, xavfsiz
            va ishonchli yetkazib beruvchi zamonaviy cargo kompaniyasi.
          </p>
          <div className="w-[98%] gap-36.5">
            <p className="text-[22px] mb-10">
              Bizning maqsadimiz — mijozlarimizga qulay va ochiq shartlarda
              xizmat ko‘rsatish, yuk harakatining har bir bosqichini nazorat
              qilish va to‘g‘ridan-to‘g‘ri eshikkacha yetkazib berish. Yukni
              bizga ishonib topshiring — biz esa natijani kafolatlaymiz.
            </p>
            <div className="flex gap-2.5 uppercase text-[13px] font-medium">
              <span className="px-10 py-4 rounded-[30px] border">
                ishonchli
              </span>
              <span className="px-10 py-4 rounded-[30px] border">xavfsiz</span>
              <span className="px-10 py-4 rounded-[30px] border">tez</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
