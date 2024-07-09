
import Logo from '../../../public/images/logo.png'
import WageWar from '../../../public/images/wage-war.png'

function ContestRules() {
    return (<div className="w-full flex items-center justify-center flex-col content-body">
        <div className="flex flex-col gap-y-4 items-center justify-center max-w-[375px] mt-8 h-full mb-8">
            <div className="flex flex-col items-center justify-center mb-0 md:mb-0">
                <img className="w-[100px] md:w-[150px] mb-2" src={ WageWar } />
                <p className="font-geizer text-center text-[3rem] md:text-[4rem] leading-none">HAPPY HUNTING</p>
                <p className="font-tungsten text-center text-[1.5rem] md:text-[1.75rem] leading-none tracking-wide">INTERACTIVE EXPERIENCE</p>
                <a className="font-tungsten text-center text-2xl font-bold mt-2" href="/">Back to home</a>
            </div>
        </div>
        <div className="max-w-[340px] flex flex-col items-start">
            <p className="font-tungsten font-bold text-center text-4xl mb-4 md:text-[4rem] leading-none">Official Contest Rules</p>
            <p className="font-tungsten font-normal text-2xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue aliquam ultrices. Fusce ultrices vulputate venenatis. 
            Vivamus eget iaculis urna. Pellentesque arcu neque, maximus eu mi vitae, pellentesque aliquam nibh. Mauris in pretium velit. 
            Fusce pharetra, lorem in venenatis blandit, lectus metus tincidunt velit, eget tempus massa tortor vel justo. Suspendisse 
            euismod eleifend mattis. Sed sed elementum mauris. Duis finibus sed nulla euismod accumsan. Curabitur fermentum lobortis 
            justo ac sagittis. Donec quis mattis arcu, vel suscipit orci. Vestibulum lacus massa, rutrum quis viverra nec, dictum vel metus. 
            In at arcu efficitur, mattis eros at, auctor nunc. Nulla tincidunt fermentum metus, quis pharetra lectus tincidunt et. Quisque 
            vel iaculis lacus. Proin sed imperdiet est.
            </p>
            <p className="font-tungsten font-normal text-2xl mb-4">
            Etiam vestibulum convallis mattis. Praesent maximus eros nec orci rutrum, eget cursus turpis fermentum. Integer aliquet mollis 
            sem maximus ultricies. Maecenas ullamcorper scelerisque ex, sit amet scelerisque justo placerat id. Integer luctus diam nisl, 
            in tempus turpis eleifend at. Donec aliquet velit at ligula tempor tristique. Suspendisse ac tristique turpis, eget lacinia velit. 
            Pellentesque euismod porttitor blandit. Aenean non tortor euismod, ornare mauris ac, pulvinar diam. Class aptent taciti sociosqu 
            ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ac enim neque.
            </p>
            <p className="font-tungsten font-normal text-2xl mb-4">
            Nulla in dolor eu ante vehicula luctus. Aliquam tincidunt dolor metus, at luctus augue rhoncus sed. Praesent non nibh sapien. 
            Pellentesque eu leo felis. Sed in risus vel risus tempor ultrices in quis est. Nunc ultricies sapien ex, id pellentesque elit 
            ullamcorper vitae. Praesent vulputate nunc in nibh tempus, non tempus ante tempor. Suspendisse vitae imperdiet enim. Proin molestie 
            velit neque, eu luctus quam blandit sed. Suspendisse non ipsum massa. Nam consectetur gravida odio nec facilisis. Pellentesque 
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur quam sapien, eleifend ac neque a, 
            feugiat accumsan odio. Fusce sed rutrum turpis, ac varius orci.
            </p>
            <p className="font-tungsten font-normal text-2xl mb-4">
            Vestibulum ultricies, libero nec viverra congue, tellus ante imperdiet est, nec euismod est elit sed diam. Donec quis tincidunt augue, 
            quis porta tortor. Nunc at nibh et justo dignissim ornare a eleifend metus. Donec feugiat nisi in luctus fringilla. Vivamus pretium 
            sem quam, at hendrerit risus egestas eget. Mauris nec enim quis felis pharetra finibus nec ac mauris. Pellentesque habitant morbi 
            tristique senectus et netus et malesuada fames ac turpis egestas. Nam quis ullamcorper quam. In malesuada semper ligula, in dapibus 
            nisi malesuada at. Maecenas venenatis sit amet tortor at tristique. Aenean pulvinar ante pellentesque felis aliquet, ut cursus elit 
            interdum. Sed mollis, justo convallis scelerisque varius, enim mi efficitur odio, dignissim ornare dui lacus sit amet metus. Vivamus 
            sollicitudin porttitor libero, sed sollicitudin ipsum ullamcorper sit amet. Duis diam ligula, eleifend vitae mattis at, hendrerit ut 
            mauris. Donec et felis quis justo varius imperdiet. Nam pharetra nisl augue, sit amet tempor elit hendrerit eget.
            </p>
            <a className="font-tungsten text-center items-center w-full text-2xl font-bold" href="/">Back to home</a>
            <div className="h-20 flex items-center justify-center bottom-0 left-0 right-0 m-auto">
                <img className="w-[50px]" src={ Logo } />
            </div>
        </div>
    </div>)
}

export default ContestRules