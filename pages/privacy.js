import Head from "next/head"
import Link from "next/link"
import Footer from "../components/Footer"

const { default: Header } = require("../components/Header")
const { default: Wrapper } = require("../components/Wrapper")

const PrivacyPage = () =>{
    return(
        <div className="dark:bg-slate-800">
            <Head>
                <title>StreamIO - Privacy Policy</title>
            </Head>
            <Header />
            <Wrapper>
                <div className="pt-20 lg:pt-24 pr-3 dark:text-white h-full w-full pb-20 ">
                    <h1 className="text-3xl font-bold">Privacy Policy</h1>
                    <p className="pt-3">
                        Your privacy is important to us. It is StreamIO's policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website, <Link href='https://streamio.cephaschapa.com'><span className="text-green-600 font-bold">https://streamio.cephaschapa.xyz</span></Link>, and other sites we own and operate.
                        This policy is effective as of 23 January 2022 and was last updated on 23 January 2022.
                    </p>
                    <p className="pt-3 ">
                        This policy is effective as of 23 January 2022 and was last updated on 23 January 2022.
                    </p>

                    <h3 className="text-2xl pt-5 font-bold">Information We Collect</h3>
                    <p className="pt-3">Information we collect includes both information you knowingly and actively provide us when using or participating in any of our services and promotions, and any information automatically sent by your devices in the course of accessing our products and services. </p>
                    
                    <h4 className="text-xl font-bold pt-3">Log Data</h4>
                    <p className="pt-3">When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, other details about your visit, and technical details that occur in conjunction with any errors you may encounter. </p>
                    <p>Please be aware that while this information may not be personally identifying by itself, it may be possible to combine it with other data to personally identify individual persons. </p>
                    
                    <h4 className="text-xl font-bold pt-3">Personal Information</h4>
                    <p className="pt-3">We may ask for personal information which may include one or more of the following: </p>
                    <ul className="pt-3 list-disc pl-5">
                        <li>Name</li>
                        <li>Email</li>
                        <li>Social media profiles</li>
                        <li>Phone/mobile number</li>
                    </ul>
                    <h4 className="text-xl font-bold pt-3">Legitimate Reasons for Processing Your Personal Information</h4>
                    <p className="pt-3">We only collect and use your personal information when we have a legitimate reason for doing so. In which instance, we only collect personal information that is reasonably necessary to provide our services to you. </p>
                    
                    <h4 className="text-xl font-bold pt-3">Collection and Use of Information</h4>
                    <p className="pt-3">We may collect personal information from you when you do any of the following on our website: </p>
                    <ul className="pt-3 list-disc pl-5">
                    <li>Sign up to receive updates from us via email or social media channels</li>
                    <li>Use a mobile device or web browser to access our content</li>
                    <li>Contact us via email, social media, or on any similar technologies</li>
                    <li>When you mention us on social media</li>
                    </ul>
                    <p className="pt-3">We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes: </p>
                    <p className="pt-3">We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes: </p>
                    
                    <ul  className="pt-3 list-disc pl-5">
                        <li>to enable you to customise or personalise your experience of our website </li>
                        <li>to contact and communicate with you</li>
                        <li>for analytics, market research, and business development, including to operate and improve our website, associated applications, and associated social media platforms</li>
                        <li>for advertising and marketing, including to send you promotional information about our products and services and information about third parties that we consider may be of interest to you</li>
                        <li>to consider your employment application</li>
                        <li>to enable you to access and use our website, associated applications, and associated social media platforms</li>
                        <li>for internal record keeping and administrative purposes</li>
                        <li>to comply with our legal obligations and resolve any disputes that we may have</li>
                        <li>for security and fraud prevention, and to ensure that our sites and apps are safe, secure, and used in line with our terms of use</li>
                    </ul>
                    <p className="pt-3">Please be aware that we may combine information we collect about you with general information or research data we receive from other trusted sources. </p>
                    
                    <h4 className="text-xl font-bold pt-3">Security of Your Personal Information</h4>
                    <p className="pt-3">When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification. </p>
                    <p className="pt-3">Although we will do our best to protect the personal information you provide to us, we advise that no method of electronic transmission or storage is 100% secure, and no one can guarantee absolute data security. We will comply with laws applicable to us in respect of any data breach. </p>
                    <p className="pt-3">You are responsible for selecting any password and its overall security strength, ensuring the security of your own information within the bounds of our services. </p>
                    
                    <h4 className="text-xl font-bold pt-3">How Long We Keep Your Personal Information</h4>
                    <p className="pt-3">We keep your personal information only for as long as we need to. This time period may depend on what we are using your information for, in accordance with this privacy policy. If your personal information is no longer required, we will delete it or make it anonymous by removing all details that identify you. </p>
                    <p className="pt-3">However, if necessary, we may retain your personal information for our compliance with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, scientific, or historical research purposes or statistical purposes. </p>
                    
                    <h3 className="text-2xl pt-5 font-bold">Disclosure of Personal Information to Third Parties</h3>
                    <p className="pt-3">We may disclose personal information to: </p>
                    <ul className="pt-3 list-disc pl-5">
                    <li>a parent, subsidiary, or affiliate of our company</li>
                        <li>third party service providers for the purpose of enabling them to provide their services, for example, IT service providers, data storage, hosting and server providers, advertisers, or analytics platforms</li>
                        <li>our employees, contractors, and/or related entities</li>
                        <li>our existing or potential agents or business partners</li>
                        <li>sponsors or promoters of any competition, sweepstakes, or promotion we run</li>
                        <li>courts, tribunals, regulatory authorities, and law enforcement officers, as required by law, in connection with any actual or prospective legal proceedings, or in order to establish, exercise, or defend our legal rights</li>
                        <li>third parties, including agents or sub-contractors, who assist us in providing information, products, services, or direct marketing to you third parties to collect and process data</li>
                    </ul>
                    
                    <h3 className="text-2xl pt-5 font-bold">International Transfers of Personal Information</h3>
                    <p className="pt-3">The personal information we collect is stored and/or processed where we or our partners, affiliates, and third-party providers maintain facilities. Please be aware that the locations to which we store, process, or transfer your personal information may not have the same data protection laws as the country in which you initially provided the information. If we transfer your personal information to third parties in other countries: (i) we will perform those transfers in accordance with the requirements of applicable law; and (ii) we will protect the transferred personal information in accordance with this privacy policy. </p>
                    <h3 className="text-2xl pt-5 font-bold">Your Rights and Controlling Your Personal Information</h3>
                    
                    <p className="pt-3">You always retain the right to withhold personal information from us, with the understanding that your experience of our website may be affected. We will not discriminate against you for exercising any of your rights over your personal information. If you do provide us with personal information you understand that we will collect, hold, use and disclose it in accordance with this privacy policy. You retain the right to request details of any personal information we hold about you. </p>
                    <p className="pt-3">If we receive personal information about you from a third party, we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person’s consent to provide the personal information to us. </p>
                    <p className="pt-3">If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time. We will provide you with the ability to unsubscribe from our email-database or opt out of communications. Please be aware we may need to request specific information from you to help us confirm your identity. </p>
                    <p className="pt-3">If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading, or out of date. </p>
                    <p className="pt-3">If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint. </p>
                    
                    <h3 className="text-2xl pt-5 font-bold">Use of Cookies</h3>
                    <p className="pt-3">We use &ldquo;cookies&rdquo; to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified. </p>
                    <h3 className="text-2xl pt-5 font-bold">Limits of Our Policy</h3>
                    <p className="pt-3">Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices. </p>
                    <h3 className="text-2xl pt-5 font-bold">Changes to This Policy</h3>
                    <p className="pt-3">At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here at the same link by which you are accessing this privacy policy. </p>
                    <p className="pt-3">If required by law, we will get your permission or give you the opportunity to opt in to or opt out of, as applicable, any new uses of your personal information. </p>
                    <h3 className="text-2xl pt-5 font-bold">Contact Us</h3>
                    <p className="pt-3">For any questions or concerns regarding your privacy, you may contact us using the following details: </p>
                    <p className="pt-3">Cephas Chapa<br />
                    dev@cephaschapa.xyz </p>


                </div>
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default PrivacyPage