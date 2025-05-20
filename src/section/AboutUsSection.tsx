const ServiceSection = () => {
  return (
    <section>
      <div className="bg-blue text-white">
        <div className="border-b border-b-[#FFFFFF80] w-full pb-4">
          <h3 className="text-white text-[20px] font-normal">Biz haqimizda</h3>
        </div>

        <h2 className="text-[150px]">
          iPost Xitoy bilan O‘zbekiston orasidagi ishonchli ko‘prik!
        </h2>
        <div>
          <p>
            iPost cargo — Xitoydan O‘zbekistonga yuk va tovarlarni tez, xavfsiz
            va ishonchli yetkazib beruvchi zamonaviy cargo kompaniyasi.
          </p>
          <div className="flex gap-36.5">
            <p>
              Bizning maqsadimiz — mijozlarimizga qulay va ochiq shartlarda
              xizmat ko‘rsatish, yuk harakatining har bir bosqichini nazorat
              qilish va to‘g‘ridan-to‘g‘ri eshikkacha yetkazib berish. Yukni
              bizga ishonib topshiring — biz esa natijani kafolatlaymiz.
            </p>
            <div className="flex gap-2.5 uppercase">
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
