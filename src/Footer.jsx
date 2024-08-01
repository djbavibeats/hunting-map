function Footer() {
    return (
    <div className="h-[75px] pt-1 md:pt-0 md:h-[60px] bg-black text-yellow flex flex-row flex-wrap marker:md:flex-row items-center justify-between px-4 text-sm">


      <div className="w-1/2 md:w-1/4 text-left">
        <p className="text-[10px] md:text-[14px] leading-[12px]">
          <a href="https://wagewarband.com/" target="_blank" rel="noopener">Wage War.</a>
          &nbsp; 
          <span className="md:hidden"><br/></span>
          <a href="https://fearlessrecords.com/" target="_blank" rel="noopener">Fearless Records.</a>
        </p>
      </div>

      {/* Desktop Terms */}
      <div className="hidden md:flex justify-center w-1/2 text-center">
        <p className="text-[10px] md:text-[14px] leading-[12px]">
          <p className="mb-2">No purchase necessary. Purchase will not improve chances of winning.</p>
          &nbsp;
          <a href="#" target="_blank" rel="noopener"><strong>Terms & Conditions.</strong></a>
        </p>
      </div>
      {/* End Desktop Terms */}

      <div className="w-1/2 md:w-1/4  text-right">
        <p className="text-[10px] md:text-[14px] leading-[12px]">
          <a href="https://voltcreative.com" target="_blank" rel="noopener">Design + Development
          <span className="hidden md:inline">&nbsp;</span>
          <span className="md:hidden"><br/></span>
          <strong>Volt Creative</strong></a>
        </p>
      </div>

      {/* Mobile Terms */}
      <div className="md:hidden w-full text-center mt-0 mb-1">
        <p className="text-[10px] md:text-[14px] leading-[12px]">
          <p className="mb-1">No purchase necessary. Purchase will not improve chances of winning.</p>
          &nbsp;
          <a href="#" target="_blank" rel="noopener"><strong>Terms & Conditions.</strong></a>
        </p>
      </div>
      {/* End Mobile Terms */}

    </div>
    )
}

export default Footer