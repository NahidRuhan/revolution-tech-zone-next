import Image from "next/image";

const Solution = () => {
    return (
        <div className="mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl">

            <div className="flex flex-col gap-5 text-center">
                <h1 className="text-4xl font-bold">Exclusive Solutions that Set Us Apart</h1>
                <p className="font-normal text-base">Our aim is to make your learning experience the best possible by providing you with additional facilities that will help you to grow without bounds.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-5">

                
      <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
        <Image width={500} height={500} className="w-1/4" src="https://www.creativeitinstitute.com/images/option/option1662372155.png" alt="" />
        <p className="font-bold text-xl py-5">Lifetime Support</p>
        <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quod reprehenderit nemo quia error similique numquam doloremque qui consequatur iusto recusandae repellendus odio vel magnam, dolores beatae iure aliquid nostrum.</p>
      </div>

      <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
        <Image width={500} height={500} className="w-1/4" src="https://www.creativeitinstitute.com/images/option/option1662372262.png" alt="" />
        <p className="font-bold text-xl py-5">Career Placement Support</p>
        <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quod reprehenderit nemo quia error similique numquam doloremque qui consequatur iusto recusandae repellendus odio vel magnam, dolores beatae iure aliquid nostrum.</p>
      </div>

      <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
        <Image width={500} height={500} className="w-1/4" src="https://www.creativeitinstitute.com/images/option/option1662372211.png" alt="" />
        <p className="font-bold text-xl py-5">Class Videos</p>
        <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quod reprehenderit nemo quia error similique numquam doloremque qui consequatur iusto recusandae repellendus odio vel magnam, dolores beatae iure aliquid nostrum.</p>
      </div>

            </div>

        </div>
    );
};

export default Solution;