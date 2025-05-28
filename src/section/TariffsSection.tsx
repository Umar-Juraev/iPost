import { SectionTitle } from "@/components/shared"

const TariffsSection = () => {
  return (
      <section id="pricing" className="container-fluid mt-[200px]">
          <SectionTitle title="Tariflar" mode="dark" />
          <div className="mt-[80px]">
              <h2 className="text-[150px] font-medium text-[#2B3944] tracking-[-6px] 3xl:text-[125px] 2xl:text-[110px]">Standart yuklar:</h2>
              <h3 className="text-[150px] font-medium text-[#0132C5] tracking-[-6px] 3xl:text-[125px] 2xl:text-[110px]">1 kg uchun 6 $</h3>
          </div>
          <div className="mt-[80px] w-full flex items-start gap-[280px]">
              <h2 className="text-[32px] font-medium text-[#2B3944] 3xl:text-[28px]">Minimal og‘irlik: 100 gramm</h2>
              <h3 className="text-[32px] font-normal text-[#2B3944] max-w-[700px] leading-[130%] 3xl:text-[28px] 3xl:max-w-[650px]">Gabarit yuklar — tarif yuk o‘lchami va turiga qarab alohida tartibda hisoblanadi.</h3>
          </div>
    </section>
  )
}

export default TariffsSection