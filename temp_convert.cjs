

const concepts = [
  {
    id: "p-ooux",
    title: "OOUX Component Sandbox",
    description: "Interactive Object-Oriented UX pattern library.",
    meta: "2023",
    html: `
      <h1>OOUX Component Sandbox</h1>
      <p>Placeholder content for the sandbox project.</p>
    `
  },
  {
    id: "p-3d",
    title: "3D Visual Exploration",
    description: "Concept renders bridging 3D assets and UI.",
    meta: "2022",
    html: `
      <h1>3D Visual Exploration</h1>
      <p>Placeholder for 3D exploration renders and UI crossovers.</p>
    `
  },
];

const useCases = [
  {
    id: "p-grid",
    title: "GRID Unified Infrastructure Software",
    description: "Unifying disparate legacy modules into a single, scalable dashboard.",
    meta: "Enterprise B2B",
    html: `
      <h1>GRID Unified Infrastructure Software</h1>
      <p><strong>The Problem:</strong> GRID was a fragmented legacy ecosystem where technical debt hindered usability. Facility managers struggled with a "Frankenstein" UI that made scaling infrastructure and onboarding new staff a high-risk bottleneck.</p>
      <p><strong>The Solution:</strong> A comprehensive UX overhaul and visual refresh that unified disparate modules into a single, scalable dashboard. I introduced a modular component library and a new Real-Time Analytics suite; all while maintaining full compatibility with 10+ years of legacy backend architecture.</p>
      <p><strong>UX Reasoning:</strong> I applied Object-Oriented UX (OOUX) to identify the core "objects" (Assets, Alerts, Zones) within the legacy data. This allowed me to create a mental model for the user that was independent of the messy database structure, significantly reducing cognitive load. Instead of a "burn-it-down" redesign, I collaborated with DevOps to build a thematic UI layer that sat atop the legacy API. This delivered a modern, high-performance experience without the multi-million dollar risk of a total backend rewrite.</p>

      <h2>Unified Monitoring & System Health</h2>
      <p><strong>The Strategy:</strong> The legacy system lacked a "birds-eye view," forcing users to hunt for errors across multiple tabs. I designed a centralized Monitoring Dashboard that aggregates real-time metrics into visual heatmaps and trend charts.</p>
      <figure>
        <img src="assets/images/image 2388.png" alt="GRID Unified Monitoring & System Health Dashboard" loading="lazy">
        <figcaption>Centralized Monitoring Dashboard aggregating real-time facility KPIs, temperature overlays, and system state timeline.</figcaption>
      </figure>
      <p><strong>The UI:</strong> Utilizing a "Bento Box" layout, I prioritized the most critical infrastructure KPIs; Energy Usage, Air Quality, and Occupancy; ensuring the most vital information is never more than a glance away.</p>
      <p><strong>Senior Insight:</strong> By implementing predictive visual patterns (such as bar charts with historical overlays), I enabled facility managers to spot anomalies before they triggered a system-wide alert, shifting the workflow from reactive to proactive. The Results: This unified view reduced the "Mean Time to Detect" (MTTD) by providing a single source of truth for complex, multi-zone environments.</p>

      <h2>Onboarding & The "Zero State"</h2>
      <p><strong>Focus:</strong> Frictionless entry into a complex system.</p>
      <p><strong>The Strategy:</strong> I replaced a cluttered, error-prone legacy landing page with a purposeful "Zero State" to guide new users toward their first success metric.</p>
      <figure>
        <img src="assets/images/image 2389.png" alt="GRID Onboarding and Zero State Screen" loading="lazy">
        <figcaption>Clean, distraction-free zero state prompting setup of initial facility operations.</figcaption>
      </figure>
      <p><strong>The UI:</strong> A high-contrast "Start New Facility Setup" CTA centers the user's primary objective, reducing the cognitive load typical of infrastructure software.</p>
      <p><strong>Insight:</strong> This screen serves as a "Clean Break," establishing the modern, simplified design language of GRID from the first interaction.</p>

      <h2>Control Hub (The "Object-First" UI)</h2>
      <p><strong>Focus:</strong> Translating technical data into human action.</p>
      <p><strong>The Strategy:</strong> Using OOUX, I grouped hundreds of raw data points into actionable "Objects": HVAC, Lighting, and Ventilation.</p>
      <figure>
        <img src="assets/images/image 2390.png" alt="GRID Control Hub Interface" loading="lazy">
        <figcaption>Control Hub: Object-first direct controls with high-affordance sliders and safety lock mechanisms.</figcaption>
      </figure>
      <p><strong>The UI:</strong> Replaced manual text entry with high-affordance sliders and status toggles for real-time adjustments.</p>
      <p><strong>Safety Feature:</strong> Introduced a "Lock Hub" mechanism to prevent accidental parameter changes; a critical requirement for high-stakes infrastructure environments.</p>

      <h2>Input Configuration & Alerts (Legacy Integration)</h2>
      <p><strong>Focus:</strong> Organizing the "Engine Room" without breaking the backend.</p>
      <p><strong>The Strategy:</strong> Unified disparate legacy data (Pressure, CO2, Humidity) into a standardized, sortable table architecture.</p>
      <figure>
        <img src="assets/images/image 2391.png" alt="GRID Alerts Hub and Notifications Overview" loading="lazy">
        <figcaption>Alerts Hub: System notifications, severity levels (Critical, Warning), and batch acknowledgment workflow.</figcaption>
      </figure>
      <p><strong>The UI:</strong> Implemented color-coded Status Badges (Active, Error, Draft) to enable "at-a-glance" system health checks.</p>
      <p><strong>The Bridge:</strong> Designed this view to sit atop existing legacy APIs, providing a modern UX without requiring a multi-million dollar database rewrite.</p>

      <h2>Automation Rules (Logic & Literacy)</h2>
      <p><strong>Focus:</strong> Empowering non-technical users with "If/Then" logic.</p>
      <p><strong>The Strategy:</strong> I transformed complex scripting requirements into a natural language automation builder.</p>
      <figure>
        <img src="assets/images/image 2392.png" alt="GRID Automation Rules Table and Logic Configuration" loading="lazy">
        <figcaption>Natural language automation builder translating complex trigger/action conditions into clear rules.</figcaption>
      </figure>
      <p><strong>The UI:</strong> Clear triggers (e.g., If CO2 > 1000ppm) and actions (e.g., Then Set HVAC to High) allow facility managers to "program" their buildings without code.</p>
      <p><strong>Added Value:</strong> This feature moved GRID from a passive monitoring tool to an active, self-optimizing infrastructure platform.</p>

      <h2>Governance & Role Management</h2>
      <p><strong>Focus:</strong> Secure scalability for enterprise clients.</p>
      <p><strong>The Strategy:</strong> Scaled the system for multi-user environments by introducing granular role-based access.</p>
      <figure>
        <img src="assets/images/image 2393.png" alt="GRID User and Role Management Interface" loading="lazy">
        <figcaption>User & Role Governance: Administrator overview, access levels, and security audit guidelines.</figcaption>
      </figure>
      <p><strong>The UI:</strong> Dashboard-style summaries provide administrators with an immediate view of user distribution (Admins vs. Managers).</p>
      <p><strong>Senior Insight:</strong> Solved a critical security pain point where legacy accounts often shared a single "Admin" credential, ensuring an audit trail for all system changes.</p>

      <blockquote>The transformation of GRID proves that technical complexity doesn't have to result in a complicated user experience. By applying a rigorous OOUX framework and respecting the constraints of legacy architecture, I delivered a platform that empowers users to manage entire cities with the same ease as a single room. This is the hallmark of senior-level design: creating simplicity out of chaos to drive measurable business value.</blockquote>
    `
  },
  {
    id: "p-pulsar",
    title: "PULSAR Recruiter Intelligence",
    description: "AI-first orchestration validating candidate knowledge before the first interview.",
    meta: "HR Tech",
    html: `
      <h1>PULSAR Recruiter Intelligence</h1>
      <p>PULSAR is an end-to-end recruitment intelligence suite designed to bridge the gap between high-volume hiring and human-centric decision-making. The platform shifts the recruiter's role from manual data entry to strategic orchestration by using AI to validate candidate knowledge before the first interview even happens. By integrating Microsoft's Fluent 2 Design System, we created a high-energy, "joyful productivity" environment that handles the complexity of global talent distribution with the simplicity of a modern consumer app.</p>

      <p><strong>The Problem (The "Human-Scale" Barrier):</strong> High-volume recruitment is a manual nightmare. Recruiters drown in "resume noise," while candidates fall into a "black hole" of silence. Legacy tools provide data but no validation, leading to biased, inefficient, and stressful hiring cycles.</p>
      <p><strong>The Solution (AI-First Orchestration):</strong> PULSAR automates the "administrative churn" to focus on human decision-making. We built an ecosystem where AI Agents pre-match candidates, Automated Knowledge Checks verify skills before the first call, and Bulk Offer Tools synthesize pay packages in seconds.</p>
      <p><strong>UX Reasoning (Glanceable Intelligence):</strong> Using Microsoft's Fluent 2 design language, I prioritized scannability over reading. Match Score Badges provide vibrant, circular indicators for instant "go/no-go" signals. We used Progressive Disclosure to hide complex data behind drill-downs, maintaining a low cognitive load. Emotional UI using soft shadows and spring animations transforms a high-pressure environment into a "joyfully productive" workspace.</p>
      <p><strong>Flavor (The "Pulsar Glow"):</strong> We avoided the sterile "corporate blue" of competitors, opting for a violet-to-pink gradient beacon. The brand's "North Star" motif is woven through the UI from "Knowledge Shields" representing verified talent to "Intelligence Cards" that coach recruiters in real-time.</p>

      <h2>The PULSAR Landing Page (The Entryway)</h2>
      <p><strong>The Problem:</strong> Traditional AI hiring tools often feel cold and opaque. Recruiters fear losing the "human touch," while job seekers worry their resumes are disappearing into a "black hole".</p>
      <figure>
        <img src="assets/images/image 9.png" alt="PULSAR Marketing Landing Page" loading="lazy">
        <figcaption>Split-screen landing page highlighting 98.5% AI match success rate and social proof cards.</figcaption>
      </figure>
      <p><strong>The Solution:</strong> We designed the landing page to lead with Data-Backed Success. By placing verified match rates (98.5%) and high-volume placement stats (50K+) directly in the hero section, we establish immediate credibility.</p>
      <p><strong>UX Reasoning:</strong> The hero section utilizes a Split-Screen Composition to balance empowering copy with a tangible preview of the AI's output. We used high-contrast cards for "Loved by Companies" testimonials to provide visual breaks, ensuring the user can absorb success stories at a glance.</p>

      <h2>Recruiter Overview (The Command Center)</h2>
      <p><strong>The Problem:</strong> The "Morning Information Overload". Recruiters typically start their day by jumping between three or four different tabs, leading to a "cold start" where critical hiring bottlenecks are missed in the noise.</p>
      <figure>
        <img src="assets/images/image 10.png" alt="PULSAR Recruiter Overview Dashboard" loading="lazy">
        <figcaption>Recruiter Command Center: High-level KPI strip, talent pool industry breakdowns, and contextual AI coaching pro-tip.</figcaption>
      </figure>
      <p><strong>The Solution:</strong> We created a high-level KPI Strip at the top of the dashboard allowing the user to immediately see active jobs (23), total applicants (1,847), and upcoming interviews (156) without clicking a single menu item.</p>
      <p><strong>UX Reasoning:</strong> Using the Fluent 2 Color Palette, we applied specific hues to different industries in the "Talent Pool Insights" chart. Blue for Construction, Pink for Kitchen Staff, etc., allows the recruiter to build a mental map of their pipeline health through color recognition.</p>
      <p><strong>Flavor:</strong> At the bottom of the dashboard, we implemented a Yellow Intelligence Card. This isn't a static alert; it's a "Pro-Tip" from the AI Agent, coaching the recruiter on how to maximize their match rate by refining their knowledge modules turning the software into a mentor.</p>

      <h2>Candidate Pipeline (The Engine)</h2>
      <p><strong>The Problem:</strong> The "Bottleneck" Blindspot. In high-volume hiring, it is often unclear exactly where candidates are getting stuck.</p>
      <figure>
        <img src="assets/images/image 11.png" alt="PULSAR Candidate Pipeline with Match Scores" loading="lazy">
        <figcaption>Candidate Pipeline: Tabbed progress counts, AI Match & Test Score circular badges, and bulk actions.</figcaption>
      </figure>
      <p><strong>The Solution:</strong> The Pipeline view uses a Tabbed Navigation System that doubles as a progress bar, showing a live count so the user sees exactly where the "weight" of the pipeline is currently sitting.</p>
      <p><strong>UX Reasoning:</strong> For the candidate list, we prioritized two specific metrics: AI Match Score and Test Score. By placing these in vibrant, circular badges, we enable "Frictionless Filtering".</p>
      <p><strong>Flavor:</strong> We designed the Knowledge Validated icon as a shield. This visual metaphor tells the recruiter that the candidate isn't just a "match" on paper, but has "shielded" the company from hiring risk.</p>

      <h2>Recruitment Analytics (The Brain)</h2>
      <p><strong>1. The Problem:</strong> "Data Rich, Insight Poor". Recruitment data is often presented in boring spreadsheets that don't tell a story.</p>
      <figure>
        <img src="assets/images/image 12.png" alt="PULSAR Recruitment Analytics Suite" loading="lazy">
        <figcaption>Recruitment Analytics Suite: Conversion funnel, sourcing channel ROI breakdown, and speed telemetry.</figcaption>
      </figure>
      <p><strong>2. The Solution:</strong> Interactive Funnel and Sourcing ROI. We designed a Three-Tiered Analytics Suite (Recruitment Funnel, Sourcing Channels, Pipeline Speed) to visualize conversion rates, platform quality, and time-to-hire.</p>
      <p><strong>3. UX Reasoning:</strong> Layered Complexity via Progressive Disclosure. The top level shows "Quick Stats", while clicking into the "Sourcing Channels" allows a deep dive into cost-per-hire and quality scores.</p>
      <p><strong>4. Flavor:</strong> The "Visual ROI" Badge adds a "Top Quality" badge next to the winning channel, providing instant psychological reward for the recruiter's strategy.</p>

      <h2>Job Seeker Dashboard (The Career Hub)</h2>
      <p><strong>Problem:</strong> Candidates feel anxious and undervalued when they have zero visibility into their "Match Score".</p>
      <p><strong>Solution:</strong> A Transparency-First Dashboard featuring a "Profile Strength" meter and a "Top Matches" list that shows exactly how well they fit a role.</p>
      <p><strong>UX Reasoning:</strong> We used Behavioral Nudging by placing the "Take Knowledge Check" CTA in a high-visibility magenta block, empowering the user to actively "unlock" interviews by proving their skills.</p>

      <h2>Knowledge Validation (The Assessment)</h2>
      <p><strong>Problem:</strong> Standard skills assessments are often intimidating, leading to candidate "test fatigue."</p>
      <p><strong>Solution:</strong> A Distraction-Free Validation Environment featuring a clean, centralized question card and a progress bar to reduce cognitive strain.</p>
      <p><strong>UX Reasoning:</strong> We implemented Soft-State Navigation with a clear "Next Question" primary action and a "Ready to Shine?" micro-copy footer to keep candidate motivation high.</p>
    \`
  },
  {
    id: "p-apexnest",
    title: "ApexNest Mortgage",
    description: "A full-lifecycle digital mortgage platform replacing the traditional 3-6 month \\"black box\\".",
    meta: "Fintech",
    html: \`
      <h1>ApexNest Mortgage</h1>
      <p>ApexNest transforms the opaque, high-anxiety European mortgage market—traditionally a 3-6 month "black box"—into a transparent, full-lifecycle digital journey. As a Senior UX Designer, I leveraged Object-Oriented UX (OOUX) and WCAG 2.2 AAA standards to replace coordination "nightmares" with an anonymous "Instant AIP" wizard and AI-driven document verification. By utilizing progressive disclosure, the design boosted completion rates to 91%. This holistic ecosystem successfully slashes industry-standard approval times to just three weeks, shifting the mortgage from a stressful utility into an empowering, manageable financial asset.</p>

      <h2>1. Problem Statement</h2>
      <p>The European mortgage market is currently a "black box" of anxiety and inefficiency. Despite a market value of €1.2 trillion, the traditional application process takes 3-6 months with virtually no transparency. Research indicates that 78% of applicants feel significant anxiety due to a lack of status visibility, while 73% are overwhelmed by complex financial jargon (LTV, APR, ERC). Furthermore, joint applications are often a "coordination nightmare," with 54% of partners struggling to manage document submissions via fragmented email chains.</p>

      <h2>2. Solution: ApexNest</h2>
      <p>ApexNest is the first European fintech to offer a full-lifecycle digital mortgage platform. By combining the transparency of Monzo with bank-grade security, we've replaced the "black box" with a guided, mobile-first journey.</p>
      <ul>
        <li><strong>Instant Gratification:</strong> An anonymous, 6-question "Approval in Principle" (AIP) wizard provides immediate borrowing capacity without a hard credit check.</li>
        <li><strong>Frictionless Documentation:</strong> A mobile-first, camera-based upload system features AI-driven document detection and real-time verification feedback.</li>
        <li><strong>Collaborative Homebuying:</strong> A shared dashboard for joint applicants provides visibility into partner tasks and status, reducing coordination time by 70%.</li>
        <li><strong>Active Management:</strong> Post-purchase tools including overpayment simulators and interest/principal breakdowns shift the app from a "one-time utility" to a monthly financial partner.</li>
      </ul>

      <h2>3. UX Reasoning</h2>
      <p>The design system for ApexNest is rooted in Object-Oriented UX (OOUX) and psychological safety.</p>
      <ul>
        <li><strong>Mental Model Alignment:</strong> We used OOUX to structure the app around real-world objects; Applicant, Application, Property, and Mortgage. This ensures the navigation feels intuitive and mimics natural thought processes.</li>
        <li><strong>Progressive Disclosure:</strong> To prevent "Document Overwhelm," we utilize a 5-stage wizard with clear progress indicators. This boosted completion rates to 91%, compared to the industry average of 45%.</li>
        <li><strong>Trust Through Color Theory:</strong> The palette uses Forest Green (#1B5E3E) for stability and growth, paired with Rich Indigo (#3B3F8A) for authority.</li>
        <li><strong>Accessibility as a Standard:</strong> Built to WCAG 2.2 Level AAA compliance, ensuring critical financial information is accessible to all.</li>
      </ul>

      <h2>4. Visual Flavor & Mobile Experience</h2>
      <p><strong>Landing & Authentication:</strong> A "Value-First" landing page features a prominent Instant Estimate card that requires no account creation, reducing the barrier to entry and achieving an 85% completion rate. The UI uses Rich Indigo for authority and Face ID for bank-grade security.</p>
      <figure>
        <img src="assets/images/image 2386.png" alt="ApexNest Landing, Authentication, and Onboarding Flows" loading="lazy">
        <figcaption>Landing, 3-step account creation with optional ID pre-fill, and value proposition onboarding carousel.</figcaption>
      </figure>

      <p><strong>Application Wizard & Progress:</strong> A 5-stage wizard with a Progress Stepper keeps users engaged through progressive disclosure. The vertical document list uses AI detection to provide instant feedback on uploads. Soft cards with rounded corners and Forest Green buttons create a sense of stability.</p>
      <figure>
        <img src="assets/images/image 2387.png" alt="ApexNest Application Wizard, AIP Approval, and Document Uploads" loading="lazy">
        <figcaption>Application flow: personal details, loan requirements, Approval in Principle confirmation, and document upload checklist.</figcaption>
      </figure>

      <p><strong>Financial Management & Insights:</strong> An interactive Overpayment Simulator and detailed payment history transform a static debt into a dynamic savings journey, increasing monthly active users to 78%. A vertical timeline utilizes semantic color badges (Vibrant Green, Professional Red) for instant clarity.</p>
      <figure>
        <img src="assets/images/image 2385.png" alt="ApexNest Mortgage Dashboard, Overpayment Calculator, and Payment History" loading="lazy">
        <figcaption>Mortgage active management: live balance, interactive overpayment simulator, interest breakdown, and payment timeline.</figcaption>
      </figure>

      <p><strong>User Profile & Co-Applicant Management:</strong> A centralized settings hub displays Co-Applicant status, resolving the coordination nightmare. Following OOUX, minimalist list items with chevron indicators ensure smooth navigation and WCAG compliance.</p>
      <figure>
        <img src="assets/images/image 2383.png" alt="ApexNest User Profile, Settings, and Payment Methods" loading="lazy">
        <figcaption>Account hub: Co-applicant management, profile details, linked banking methods, and preference settings.</figcaption>
      </figure>

      <h2>5. The Back Office (ApexNest VAP)</h2>
      <p>The Verification & Administration Portal (VAP) is designed for high-density information processing and speed.</p>
      <figure>
        <img src="assets/images/image 2384.png" alt="ApexNest Verification and Administration Portal (VAP)" loading="lazy">
        <figcaption>ApexNest VAP: Operational KPI overview, AI-assisted document verification triage, and client pipeline management.</figcaption>
      </figure>
      <p><strong>Operational Overview:</strong> A high-density dashboard shows Total Clients, AI Flags, and a live "Recent Activity" feed. Administrators get a "God-view" to prioritize tasks, focusing only on cases with low-confidence document detections. The wide-screen layout uses professional muted grays to highlight critical status indicators.</p>
      <p><strong>AI-Assisted Document Verification:</strong> Manual document verification is the primary bottleneck. An AI Review interface side-lines manual work by pre-analyzing documents and highlighting specific risks (e.g., "Irregular deposits"). This reduces verification time from 5 days to 5 minutes using clear, large primary actions (Green/Red buttons) to reduce human error.</p>
      <p><strong>Client Pipeline Management:</strong> A searchable, real-time client list with status badges that map directly to the user's mobile progress. This serves as the master list for the "Application" object in our OOUX hierarchy, with a UI prioritizing whitespace and legible typography to reduce "data fatigue".</p>
    `
  },
];

fs.writeFileSync('./src/data/projects.json', JSON.stringify({ concepts, useCases }, null, 2));
console.log("JSON generated successfully!");
