function Footer() {
    return (
    <div className="h-[60px] bg-black text-yellow flex flex-row md:flex-row items-center justify-between px-4 text-sm">
      <div className="w-1/3 text-left">
        <p className="text-[10px] md:text-[14px] leading-[12px]">
          <a href="https://wagewarband.com/" target="_blank" rel="noopener">Wage War.</a>
          &nbsp; 
          <span className="md:hidden"><br/></span>
          <a href="https://fearlessrecords.com/" target="_blank" rel="noopener">Fearless Records.</a>
        </p>
      </div>
      <div className="w-1/3  text-center">
        <p className="text-[10px] md:text-[14px] leading-[12px]">
          <p>NO PURCHASE NECESSARY. PURCHASE WILL NOT IMPROVE CHANCES OF WINNING.</p>
          &nbsp;
          <br/>
          {/* <br /> */}
          {/* <span onClick={ toggleTermsModalVisible } className="hover:cursor-pointer">Terms of Service.</span> */}
          <a className="" href="#" target="_blank" rel="noopener">Terms & Conditions.</a>
          &nbsp;
          {/* <a href="https://concord.com/privacy-policy/" target="_blank" rel="noopener">Privacy Policy.</a> */}
        </p>
      </div>
      <div className="w-1/3  text-right">
        <p className="text-[10px] md:text-[14px] leading-[12px]">
          <a href="https://voltcreative.com" target="_blank" rel="noopener">Design + Development <strong>Volt Creative</strong></a>
        </p>
      </div>
    </div>
    )
}

export default Footer