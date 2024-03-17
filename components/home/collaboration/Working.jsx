import Image from "next/image";

const Working = () => {

    const logo = [
        'https://www.creativeitinstitute.com/images/cit_partner/1_partner_logo_1663044423.png',
        'https://www.creativeitinstitute.com/images/cit_partner/2_partner_logo_1663044423.png',
        'https://www.creativeitinstitute.com/images/cit_partner/3_partner_logo_1663044423.png',
        'https://www.creativeitinstitute.com/images/cit_partner/4_partner_logo_1663044423.png',
        'https://www.creativeitinstitute.com/images/cit_partner/5_partner_logo_1663044423.png',
        'https://www.creativeitinstitute.com/images/cit_partner/6_partner_logo_1663044423.png',
        'https://www.creativeitinstitute.com/images/cit_partner/7_partner_logo_1663044423.png',
        'https://www.creativeitinstitute.com/images/cit_partner/8_partner_logo_1663044423.png',
        'https://www.creativeitinstitute.com/images/cit_partner/9_partner_logo_1663044423.png',
        'https://www.creativeitinstitute.com/images/cit_partner/10_partner_logo_1663044423.png',
        'https://www.creativeitinstitute.com/images/cit_partner/11_partner_logo_1663044423.png',
        'https://www.creativeitinstitute.com/images/cit_partner/12_partner_logo_1663044423.png',
        'https://www.creativeitinstitute.com/images/cit_partner/13_partner_logo_1663044423.png',
        'https://www.creativeitinstitute.com/images/cit_partner/14_partner_logo_1663044423.png',
        'https://www.creativeitinstitute.com/images/cit_partner/15_partner_logo_1663044423.png',
        'https://www.creativeitinstitute.com/images/cit_partner/1_partner_logo_1663044437.png',
        'https://www.creativeitinstitute.com/images/cit_partner/2_partner_logo_1663044437.png',
        'https://www.creativeitinstitute.com/images/cit_partner/3_partner_logo_1663044437.png',
        'https://www.creativeitinstitute.com/images/cit_partner/4_partner_logo_1663044437.png',
        'https://www.creativeitinstitute.com/images/cit_partner/5_partner_logo_1663044437.png',
        'https://www.creativeitinstitute.com/images/cit_partner/6_partner_logo_1663044437.png',
        'https://www.creativeitinstitute.com/images/cit_partner/7_partner_logo_1663044437.png',
        'https://www.creativeitinstitute.com/images/cit_partner/8_partner_logo_1663044437.png',
        'https://www.creativeitinstitute.com/images/cit_partner/9_partner_logo_1663044438.png',
        
    ]
    return (
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3">
        
        {logo.map((imageUrl, index) => (
                    <div key={index} className="flex flex-col justify-center w-1/2 lg:w-full mx-auto h-44">
                        <Image width={200} height={200} src={imageUrl} alt={`Logo ${index}`} className="mx-auto" />
                    </div>
                ))}
            </div>
            );
};

export default Working;