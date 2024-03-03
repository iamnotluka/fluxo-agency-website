import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";

const TermsAndConditionsRoute = () => {
	return (
		<div>
			<Header />
			<div>
				<div className={`bg-black text-white sm:py-14 py-2 px-4`}>
					<div className={`w-full max-w-3xl text-left py-2 mx-auto transition-all`}>
						<h1 className={`sm:text-4xl md:text-5xl text-xl font-bold sm:leading-tight`}>Terms & Conditions</h1>
					</div>
				</div>
				<div className="bg-white text-black sm:py-10 md:py-10 py-5 pb-4 px-4">
					<div className="w-full max-w-3xl text-left sm:text-center pb-11 mx-auto">
						<div className="text-left bg-white text-black prose">
							<ReactMarkdown>{content}</ReactMarkdown>
						</div>
					</div>
				</div>
			</div>{" "}
			<Footer />
		</div>
	);
};

export default TermsAndConditionsRoute;

const content = `
**Last updated: Sunday 3rd March 2024**

Welcome to fluxoagency.com. These terms and conditions outline the rules and regulations for the use of Fluxo Agency's Website, located at [fluxoagency.com](http://fluxoagency.com).

By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Fluxo Agency's website if you do not agree to all of the terms and conditions stated on this page.

## 1. Intellectual Property Rights

Other than content you own, which you may have opted to include on this Website, under these Terms, Fluxo Agency and/or its licensors own all rights to the intellectual property and material contained in this Website, and all such rights are reserved.

You are granted a limited license only, subject to the restrictions provided in these Terms, for purposes of viewing the material contained on this Website.

## 2. Restrictions

You are expressly restricted from the following:

- Publishing any Website material in any media;
- Selling, sublicensing and/or otherwise commercializing any Website material;
- Publicly performing and/or showing any Website material;
- Using this Website in any way that is, or may be, damaging to this Website;
- Using this Website in any way that impacts user access to this Website;
- Using this Website contrary to applicable laws and regulations, or in a way that causes, or may cause, harm to the Website, or to any person or business entity;
- Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website, or while using this Website;
- Using this Website to engage in any advertising or marketing.

Certain areas of this Website are restricted from access by you and Fluxo Agency may further restrict access by you to any areas of this Website, at any time, in its sole and absolute discretion.

## 3. Your Content

In these Terms and Conditions, "Your Content" shall mean any audio, video, text, images, or other material you choose to display on this Website. With respect to Your Content, by displaying it, you grant Fluxo Agency a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate, and distribute it in any and all media.

Your Content must be your own and must not be infringing on any third party's rights. Fluxo Agency reserves the right to remove any of Your Content from this Website at any time, without notice.

## 4. No warranties

This Website is provided "as is," with all faults, and Fluxo Agency makes no express or implied representations or warranties, of any kind related to this Website or the materials contained on this Website.

## 5. Limitation of liability

In no event shall Fluxo Agency, nor any of its officers, directors, and employees, be liable for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract, tort or otherwise, and Fluxo Agency, including its officers, directors, and employees, shall not be liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.

## 6. Indemnification

You hereby indemnify to the fullest extent Fluxo Agency from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.

## 7. Severability

If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such provisions shall be deleted without affecting the remaining provisions herein.

## 8. Variation of Terms

Fluxo Agency is permitted to revise these Terms at any time as it sees fit, and by using this Website, you are expected to review such Terms on a regular basis to ensure you understand all terms and conditions governing the use of this Website.

## 9. Assignment

Fluxo Agency shall be permitted to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification or consent required. However, you shall not be permitted to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.

## 10. Entire Agreement

These Terms, including any legal notices and disclaimers contained on this Website, constitute the entire agreement between Fluxo Agency
`;
