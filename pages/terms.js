import Head from "next/head"
import Link from "next/link"
import Footer from "../components/Footer"

const { default: Header } = require("../components/Header")
const { default: Wrapper } = require("../components/Wrapper")

const TermsPage = () =>{
    return(
        <div className="dark:bg-slate-800">
            <Head>
                <title>StreamIO - Terms of Service</title>
            </Head>
            <Header />
            <Wrapper>
                <div className="pt-20 lg:pt-24 pr-3 dark:text-white h-full w-full pb-20 ">
                    <h1 className="text-3xl font-bold">Website Terms and Conditions of Use</h1>

                    <h2 className="text-2xl pt-5 font-bold">1. Terms</h2>

                    <p className="pt-3">By accessing this Website, accessible from https://streamio.cephaschapa.xyz, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>

                    <h2 className="text-2xl pt-5 font-bold">2. Use License</h2>

                    <p className="pt-3">Permission is granted to temporarily download one copy of the materials on StreamIO's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>

                    <ul className="pt-3 list-disc pl-5">
                        <li>modify or copy the materials;</li>
                        <li>use the materials for any commercial purpose or for any public display;</li>
                        <li>attempt to reverse engineer any software contained on StreamIO's Website;</li>
                        <li>remove any copyright or other proprietary notations from the materials; or</li>
                        <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
                    </ul>

                    <p className="pt-3">This will let StreamIO to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. These Terms of Service has been created with the help of the <a href="https://www.termsofservicegenerator.net">Terms Of Service Generator</a>.</p>

                    <h2 className="text-2xl pt-5 font-bold">3. Disclaimer</h2>

                    <p className="pt-3">All the materials on StreamIO’s Website are provided "as is". StreamIO makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, StreamIO does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>

                    <h2 className="text-2xl pt-5 font-bold">4. Limitations</h2>

                    <p className="pt-3">StreamIO or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on StreamIO’s Website, even if StreamIO or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>

                    <h2 className="text-2xl pt-5 font-bold">5. Revisions and Errata</h2>

                    <p className="pt-3">The materials appearing on StreamIO’s Website may include technical, typographical, or photographic errors. StreamIO will not promise that any of the materials in this Website are accurate, complete, or current. StreamIO may change the materials contained on its Website at any time without notice. StreamIO does not make any commitment to update the materials.</p>

                    <h2 className="text-2xl pt-5 font-bold">6. Links</h2>

                    <p className="pt-3">StreamIO has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by StreamIO of the site. The use of any linked website is at the user’s own risk.</p>

                    <h2 className="text-2xl pt-5 font-bold">7. Site Terms of Use Modifications</h2>

                    <p className="pt-3">StreamIO may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>

                    <h2 className="text-2xl pt-5 font-bold">8. Your Privacy</h2>

                    <p className="pt-3">Please read our Privacy Policy.</p>

                    <h2 className="text-2xl pt-5 font-bold">9. Governing Law</h2>

                    <p className="pt-3">Any claim related to StreamIO's Website shall be governed by the laws of zm without regards to its conflict of law provisions.</p>
                </div>
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default TermsPage