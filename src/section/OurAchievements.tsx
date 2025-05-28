
const OurAchievements = () => {
  return (
    <section className="mt-[300px]">
      <div className="w-full flex items-center justify-around gap-1.5 container-fluid">
        <h2 className="text-[#2B3944] text-[100px] font-medium max-w-[970px] leading-[110%]">Bizning Yutuqlarimiz</h2>
        <div className="flex flex-col gap-[34px] masx-w-[540px]">
          <h5 className="text-[#2B3944] text-[32px] font-medium leading-[120%]">iPost cargo — yukingiz biz bilan ishonchli yo‘lda!</h5>
          <p className="text-[#2B3944] text-[18px] font-normal leading-[130%]">Biz-Xitoydan O&apos;zbekistonga tovarlar yetkazib berishga ixtisoslashgan cargo kompaniyasimiz.</p>
        </div>
      </div>
      <div className="mt-[100px] bg-[#0132C5] flex justify-around gap-2 py-[120px] px-[80px] w-full">
        <div className="max-w-[324px] flex flex-col gap-[17px]">
          <h6 className="border-b border-b-[#FFFFFF4D] text-white text-[15px] font-medium pb-4 w-full">MIJOZLAR</h6>
          <strong className="text-white text-[80px] font-semibold">10.000+</strong>
        </div>
        <div className="max-w-[324px] flex flex-col gap-[17px]">
          <h6 className="border-b border-b-[#FFFFFF4D] text-white text-[15px] font-medium pb-4 w-full">YUK AVTOMOBILLARI</h6>
          <strong className="text-white text-[80px] font-semibold">50+</strong>
        </div>
        <div className="max-w-[324px] flex flex-col gap-[17px]">
          <h6 className="border-b border-b-[#FFFFFF4D] text-white text-[15px] font-medium pb-4 w-full">OMBOR MAYDONI</h6>
          <strong className="text-white text-[80px] font-semibold">1000m<sup>2</sup></strong>
        </div>
        <div className="max-w-[324px] flex flex-col gap-[17px]">
          <h6 className="border-b border-b-[#FFFFFF4D] text-white text-[15px] font-medium pb-4 w-full">MUTAXASSISLAR</h6>
          <strong className="text-white text-[80px] font-semibold">50+</strong>
        </div>
      </div>
    </section>
  )
}

export default OurAchievements