import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";

const PrivacyPolicyRoute = () => {
	return (
		<div>
			<Header />
			<div>
				<div className={`bg-black text-white sm:py-14 py-2 px-4`}>
					<div className={`w-full max-w-3xl text-left py-2 mx-auto transition-all`}>
						<h1 className={`sm:text-4xl md:text-5xl text-xl font-bold sm:leading-tight`}>Privacy Policy</h1>
					</div>
				</div>
				<div className="bg-white text-black sm:py-10 md:py-10 py-5 pb-4 px-4">
					<div className="w-full max-w-3xl text-left sm:text-center pb-11 mx-auto">
						<div className="text-left bg-white text-black prose">
							<ReactMarkdown>{content}</ReactMarkdown>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default PrivacyPolicyRoute;

const content = `
**Last updated:** Sunday 3rd March 2024

Fluxo Agency is committed to providing quality services to you and this policy outlines our ongoing obligations to you in respect of how we manage your Personal Information.

We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) (the Privacy Act). The APPs govern the way in which we collect, use, disclose, store, secure, and dispose of your Personal Information.

A copy of the Australian Privacy Principles may be obtained from the website of The Office of the Australian Information Commissioner at [https://www.oaic.gov.au/](https://www.oaic.gov.au/).

## What is Personal Information and why do we collect it?

Personal Information is information or an opinion that identifies an individual. Fluxo Agency does not collect Personal Information as our website is designed to provide information about our services without the need for personal data collection.

## Sensitive Information

Sensitive information is defined in the Privacy Act to include information or opinion about such things as an individual's racial or ethnic origin, political opinions, membership of a political association, religious or philosophical beliefs, membership of a trade union or other professional body, criminal record, or health information.

Since we do not collect Personal Information, the collection of Sensitive Information is also not applicable.

## Third Parties

Fluxo Agency does not collect Personal Information from you, and therefore, there is no sharing of your Personal Information with third parties.

## Disclosure of Personal Information

Your Personal Information would only be disclosed in a number of circumstances including the following:

- Third parties where you consent to the use or disclosure; and
- Where required or authorised by law.

However, since we do not collect Personal Information, such disclosures would not occur.

## Security of Personal Information

As we do not collect or store Personal Information, the security of Personal Information is not a concern for our operations. Should we change our practices in the future, we will update this policy accordingly and take all reasonable steps to protect any Personal Information we may collect.

## Access to your Personal Information

Since no Personal Information is collected, access requests to Personal Information are not applicable.

## Maintaining the Quality of your Personal Information

As Personal Information is not collected, maintaining its quality is not applicable to our operations.

## Policy Updates

This Policy may change from time to time and is available on our website. We encourage you to review this policy periodically to stay informed of any updates.

## Privacy Policy Complaints and Enquiries

If you have any queries or complaints about our Privacy Policy, please contact us at:

- **Email:** support@fluxoagency.com

Fluxo Agency is committed to ensuring the privacy and security of all potential data and to complying with the APPs and the Privacy Act. This policy represents our current data collection and handling practices, and it will be updated in line with any changes to these practices or legal requirements.
`;
