---
title: Data Security Policy
layout: default
parent: Reference
---

# Data Security Policy

{: .highlight }
> Practical security measures to protect company data, customer information, and intellectual property without creating compliance theater.

## 개요

Security policies often fail because they're either too vague ("be careful with data") or too rigid (requiring five approvals to share a spreadsheet). Kyndof's Data Security Policy takes a different approach: clear rules for what data requires protection, practical guidelines for how to protect it, and accountability when things go wrong.

This policy applies to all employees, contractors, and partners who access Kyndof systems or handle company or customer data. Violations create risk for the organization and individuals—security breaches can result in legal liability, customer loss, and termination.

## Data Classification

Not all data requires the same protection. We classify data into four tiers:

**Public**: Information already in the public domain or explicitly approved for public release. Examples: marketing materials, published blog posts, job postings, public API documentation. Public data can be shared freely but shouldn't be modified or misrepresented.

**Internal**: Information intended for Kyndof employees but not harmful if exposed. Examples: team calendars, internal meeting notes, org charts, non-sensitive project plans. Internal data should stay within the organization but doesn't require encryption or access controls beyond company authentication.

**Confidential**: Information that could harm the company or individuals if disclosed. Examples: unreleased product plans, financial data, employee salaries, strategic decisions, vendor contracts, customer lists. Confidential data requires access controls and should only be shared on a need-to-know basis.

**Restricted**: Highly sensitive data with regulatory or legal protection requirements. Examples: customer PII (names, emails, addresses), authentication credentials, payment information, health data, trade secrets, source code for security-critical systems. Restricted data requires encryption at rest and in transit, strict access controls, and audit trails.

When handling data, ask: If this were leaked, what's the worst-case impact? Minor embarrassment = Internal. Competitive harm = Confidential. Legal liability or customer harm = Restricted.

## Access Control Principles

Access to data follows three principles:

**Need-to-Know**: Grant access only to people who require it for their role. Don't default to "everyone can see everything." If someone changes roles, review and revoke access they no longer need.

**Least Privilege**: Give the minimum access level necessary. If someone needs to read data, don't give them write or delete permissions. If they need access to one system, don't give them admin access to all systems.

**Time-Bound**: Access to restricted data should be reviewed regularly (quarterly at minimum). Temporary contractors or project-based access should have expiration dates. When someone leaves the organization, revoke all access immediately.

## Storage and Transmission

Where and how you store data matters:

**Approved Systems**: Store company data only in approved systems (Notion, GitHub, Google Workspace, designated cloud storage). Don't use personal Dropbox, Gmail, or unapproved tools for work data. If you need a new tool, request it through IT with justification.

**Encryption**: Restricted data must be encrypted at rest (stored encrypted) and in transit (transmitted over HTTPS/TLS). Most approved systems handle this automatically, but verify before storing sensitive data. Internal and Confidential data should use encrypted transmission but doesn't require encryption at rest unless legally mandated.

**Local Storage**: Avoid storing work data on local devices (laptops, phones) when possible. If necessary for offline access, ensure full-disk encryption is enabled on your device. Don't store Restricted data locally except in approved secure vaults (e.g., password managers).

**Email**: Don't email Restricted data as unencrypted attachments. Use secure sharing links with access controls instead. Email is not a secure transmission method—treat it as Internal-tier security at best.

**Removable Media**: Don't copy company data to USB drives, external hard drives, or other removable media without explicit approval. Removable media is easily lost or stolen and rarely encrypted properly.

**Backup**: Critical data should be backed up automatically by approved systems. Don't rely solely on local backups. Verify backup restoration works—backups are worthless if you can't restore from them.

## Authentication and Credentials

Protecting accounts is protecting data:

**Password Requirements**: Use strong, unique passwords for every system (12+ characters, mix of letters, numbers, symbols). Use a password manager—don't reuse passwords across systems or write them down in plain text.

**Multi-Factor Authentication (MFA)**: MFA is required for all systems that support it, especially those containing Confidential or Restricted data. Prefer authenticator apps or hardware tokens over SMS-based MFA (which is vulnerable to SIM swapping).

**Credential Sharing**: Never share passwords, API keys, or authentication tokens. If multiple people need access, create separate accounts. If a service doesn't support multiple accounts, request a system upgrade or additional licenses.

**Credential Storage**: Store credentials only in approved password managers or secret management systems. Don't hardcode credentials in code, commit them to version control, or store them in unencrypted files.

**Credential Rotation**: Rotate passwords for critical systems quarterly. Rotate API keys and service accounts annually or immediately if exposure is suspected. Don't wait for a breach to change credentials.

**Compromised Credentials**: If you suspect a credential has been exposed (leaked in code, phishing attempt, unauthorized access), report it immediately to IT and change the credential. Speed matters—assume exposure has occurred and act accordingly.

## Sharing and Collaboration

Collaboration requires data sharing, but do it securely:

**Internal Sharing**: Use role-based access in approved systems. Share via access-controlled links rather than downloading and re-uploading. Set expiration dates on shares when appropriate.

**External Sharing**: Before sharing Confidential or Restricted data externally, verify: Do they need it? Is there a signed NDA or contract in place? Can you share a limited subset rather than full data? Use watermarking or tracking when appropriate for sensitive documents.

**Screen Sharing**: When sharing your screen in meetings, close windows/tabs containing sensitive data. Don't accidentally expose credentials, customer PII, or confidential documents to unauthorized viewers.

**Public Wifi**: Avoid accessing Restricted data over public wifi (coffee shops, airports) unless using a VPN. Public networks are unencrypted and vulnerable to interception. If you must use public wifi, limit activities to low-sensitivity work.

**Printing**: Minimize printing of Confidential or Restricted data. When necessary, collect printouts immediately and shred when no longer needed. Don't leave sensitive documents on shared printers.

## Incident Response

When security incidents occur, respond quickly:

**What Counts as an Incident**: Lost/stolen device, suspected account compromise, accidental data exposure (e.g., wrong recipient on email), malware infection, unauthorized access to systems, data breach, phishing attack.

**Immediate Actions**:
1. Stop the exposure if possible (revoke link, change password, disconnect device)
2. Report to IT/Security team immediately (don't wait to confirm)
3. Preserve evidence (screenshots, logs, email headers)
4. Don't try to "fix it yourself" and hide the issue

**Reporting Channels**: Email security@kyndof.com or message IT in Slack. For critical incidents (customer data exposed, active breach), escalate to CTO immediately. Anonymous reporting is available if you fear retaliation, but named reports enable faster response.

**Post-Incident**: Participate in investigation if asked. Learn from the incident—what process failed? How can we prevent recurrence? Incidents are learning opportunities, not blame sessions (unless they result from intentional policy violation).

## Device and Endpoint Security

Your devices are security perimeters:

**Device Management**: Work devices must be enrolled in company device management (MDM). This enables remote wipe if lost/stolen, enforces security policies (encryption, screen lock timeout), and ensures updates are applied.

**Operating System Updates**: Keep your OS and applications updated. Enable automatic security updates where possible. Unpatched systems are the most common breach vector.

**Screen Lock**: Set screen lock to activate after 5 minutes of inactivity. Use a strong password or biometric authentication (fingerprint, face recognition). Don't leave devices unlocked in public or shared spaces.

**Antivirus/Endpoint Protection**: Install and maintain company-provided endpoint protection software. Don't disable it or ignore warnings. Most malware infections happen because endpoint protection was disabled.

**Lost/Stolen Devices**: Report lost or stolen devices to IT immediately. We can remotely wipe company data to prevent unauthorized access. Don't delay reporting out of embarrassment—security over ego.

**Personal Devices**: Using personal devices for work (BYOD) is discouraged but permitted with restrictions: only for Internal-tier data, no Restricted data, device must have screen lock and encryption enabled, company reserves right to wipe company data if device is compromised.

## Development and Code Security

For engineers and technical roles:

**Version Control**: Never commit credentials, API keys, or secrets to version control. Use secret management systems (e.g., AWS Secrets Manager, HashiCorp Vault) or environment variables. Scan repositories for leaked credentials regularly.

**Dependency Management**: Keep dependencies updated. Use automated dependency scanning for known vulnerabilities. Don't use unmaintained or untrusted libraries for critical systems.

**Code Review**: Security-critical code requires peer review. Don't merge authentication, authorization, or data handling code without review. Fresh eyes catch vulnerabilities individual developers miss.

**Secure Defaults**: Design systems to fail closed, not open. If authentication fails, deny access—don't fall back to unauthenticated access. Default to least privilege—grant access explicitly rather than denying it explicitly.

**Data Minimization**: Collect and store only data you actually need. Don't log PII or sensitive data unnecessarily. Delete data when no longer required. Every byte of stored data is liability.

**SQL Injection and XSS**: Use parameterized queries and input validation. Never construct SQL queries with string concatenation. Sanitize all user input before rendering in web contexts. These are ancient vulnerabilities with no excuse for existence.

## Third-Party and Vendor Management

External partners create security dependencies:

**Vendor Vetting**: Before granting vendor access to Confidential or Restricted data, verify their security practices. Request SOC2 reports, conduct security questionnaires, review their incident history. Don't outsource security—verify it.

**Contracts and NDAs**: Require contracts specifying data handling obligations, breach notification requirements, and liability for security failures. NDAs alone aren't sufficient for Restricted data—you need specific security commitments.

**Access Auditing**: Review vendor access quarterly. Revoke access when contracts end or projects complete. Vendors should have separate accounts, not shared credentials or employee accounts.

**Data Processing Agreements**: For vendors processing customer data (especially in regulated industries), execute Data Processing Agreements (DPAs) specifying how data is handled, where it's stored, and how breaches are reported.

## Regulatory and Compliance Context

Security policies exist within legal frameworks:

**GDPR (EU)**: If we process EU resident data, GDPR applies. Key requirements: lawful basis for processing, right to deletion, breach notification within 72 hours, data minimization, consent management. Violations result in fines up to 4% of revenue.

**CCPA (California)**: Similar to GDPR but with different scope and rights. California residents can request disclosure of collected data, request deletion, and opt out of data sales. Violations result in fines and lawsuits.

**HIPAA (Healthcare)**: If we handle health data, HIPAA applies. Requires encryption, access logging, breach notification, and business associate agreements. Violations result in criminal and civil penalties.

**PCI-DSS (Payment Cards)**: If we process credit cards, PCI-DSS applies. Never store full card numbers, CVVs, or PINs. Use tokenization and outsource payment processing to PCI-compliant providers when possible.

Compliance isn't just checking boxes—it's minimizing organizational and individual liability. When in doubt about regulatory requirements, consult Legal or Compliance team before making decisions.

## Why This Policy Exists

Security policies fail when they're disconnected from real threats and daily work. Employees route around security when it's inconvenient, creating hidden vulnerabilities.

This policy succeeds by aligning security with work patterns. We use approved systems that are secure by default. We classify data so people know what deserves protection. We automate enforcement where possible (MFA, encryption, access controls) so individuals don't bear the full cognitive load.

But automation isn't sufficient. Security requires judgment: Should I share this? Is this system secure enough? What's the risk of this action? This policy provides the framework for exercising that judgment.

Breaches happen. What separates secure organizations from vulnerable ones isn't perfection—it's speed of detection and response, quality of incident handling, and willingness to learn from failures. If you see something, say something. If you make a mistake, report it. If a process creates security risk, raise it.

Security is everyone's responsibility, but managers and leaders set the tone. If leadership treats security as bureaucratic overhead, teams will too. If leadership models good security hygiene and responds to incidents constructively, teams follow suit.

---

## 관련 문서

- [Code of Conduct](./code-of-conduct.md) - Confidentiality obligations
- [Remote Work Policy](../how-we-work/remote-work-policy.md) - Secure remote access
- [IP Policy](./ip-policy.md) - Intellectual property protection
- [SOP: Incident Response](../../sops/incident-response.md) - Security incident workflow
