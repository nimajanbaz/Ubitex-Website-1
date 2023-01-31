import TitleBox from "../../blog/components/titleBox";
import { IoMdColorPalette } from "react-icons/io";

const BrandColors = () => {
  return (
    <>
      <TitleBox icon={<IoMdColorPalette />} title={"رنگ‌های سازمانی یوبیتکس"} />

      <div className="flex justify-between items-center w-1/2 mx-auto gap-10">
        <div className="flex justify-between items-center rtl-grid w-full">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 flex-row-reverse">
              <span className="font-semibold">:Hex</span>
              <span>#f39200</span>
            </div>

            <div className="flex items-center gap-2 flex-row-reverse">
              <span className="font-semibold">:RGB</span>
              <span>0 146 243</span>
            </div>

            <div className="flex items-center gap-2 flex-row-reverse">
              <span className="font-semibold">:CMYK</span>
              <span>5% 95% 38% 0%</span>
            </div>

            <div className="flex items-center gap-2 flex-row-reverse">
              <span className="font-semibold">:HSL</span>
              <span>0.48 1 36.05</span>
            </div>
          </div>

          <div className="h-36 w-36 rounded-full bg-[#f39200]"></div>
        </div>

        <div className="flex justify-between items-center rtl-grid w-full">
          <div className="h-36 w-36 rounded-full bg-[#051d3b]"></div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Hex:</span>
              <span>#04162d</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold">RGB:</span>
              <span>45 22 4</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold">CMYK:</span>
              <span>82% 0% 9% 16%</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold">HSL:</span>
              <span>0.1 0.84 213.66</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandColors;
