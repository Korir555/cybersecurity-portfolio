# Screenshot Capture Guide for Featured Projects

## Purpose
Add visual proof of work to portfolio case studies. Screenshots demonstrate:
- Systems actually built and working
- Lab testing completed
- Understanding of tool interfaces
- Professional-grade implementation

All screenshots are from **lab testing environments** (not production).

---

## Project-by-Project Guide

### #17: Wazuh SIEM Dashboard

**What to Show:**
1. **Kibana Dashboard Overview** (3–4 metrics at a glance)
   - Total alerts (last 24h)
   - Severity distribution (pie chart)
   - Top techniques (MITRE ATT&CK heatmap)
   - Agent status (online/offline count)

2. **Alert Detail View**
   - Sample alert with full context (source IP, destination, technique)
   - Severity badge (red for high)
   - Timeline of related events

3. **Compliance Scoring Dashboard**
   - GDPR compliance %
   - HIPAA compliance %
   - PCI-DSS compliance %
   - Trending line chart

4. **Custom Detection Rule** (if possible)
   - Rule definition (YAML or JSON)
   - Example trigger log

**Lab Testing Context:**
Add caption: *"Lab testing environment: 50 simulated endpoints, 10K+ test log events, 98% detection accuracy on known malware signatures."*

**Screenshot Tools:**
- macOS: Cmd+Shift+4 (select area)
- Linux: gnome-screenshot, flameshot
- Windows: Snip & Sketch

---

### #07: Incident Response Simulator

**What to Show:**
1. **Scenario Selection Screen**
   - List of 8+ incident scenarios
   - Difficulty ratings (Beginner, Intermediate, Expert)

2. **Incident Timeline During Simulation**
   - Events appearing in sequence
   - Decision points (your analyst must choose containment action)

3. **Decision Tree Example**
   - Screenshot of the branch point
   - Multiple choices visible
   - "Impact of this choice" preview

4. **Results Screen After Scenario**
   - Your decisions vs. recommended procedures
   - Performance metrics:
     - Detection time: 8 min (vs. average 15 min)
     - Containment speed: ✓ Excellent
     - False positive rate: 2% (vs. industry avg 5%)
   - Accuracy score: 92/100

5. **Leaderboard (if available)**
   - Shows progression/competitive aspect

**Lab Testing Context:**
*"Trained on MITRE ATT&CK scenarios; results from test runs with 20 simulated incident sequences."*

---

### #15: Security Audit Dashboard

**What to Show:**
1. **Compliance Score Card**
   - GDPR: 89% (visual progress bar)
   - HIPAA: 94%
   - PCI-DSS: 91%
   - Color-coded (red/yellow/green)

2. **Finding List**
   - Sample findings with severity
   - Status: "Open", "In Progress", "Closed"
   - Remediation date due
   - Assigned owner

3. **Control Mapping View**
   - Example: "GDPR Art. 5 (Data Integrity)" → "Control: Database encryption at rest"
   - Pass/Fail status

4. **Remediation Timeline**
   - Gantt chart or timeline showing:
     - Critical items (red, due within 7 days)
     - High items (orange, due within 30 days)
     - Medium/Low items (yellow/green)

5. **Audit Trail (sample)**
   - Timestamped log of who accessed what when

**Lab Testing Context:**
*"Test environment with simulated control assessments across 5 major frameworks. Demonstration of 23 findings lifecycle from discovery to remediation."*

---

### #25: GRC Risk Assessment Framework

**What to Show:**
1. **Risk Heat Map**
   - X-axis: Likelihood (Low → High)
   - Y-axis: Impact (Low → High)
   - 5–10 risk items plotted
   - Color-coded zones (green=low, yellow=medium, red=critical)

2. **Asset Inventory**
   - Table or list: System name, owner, risk score, last update
   - Example: Database server (Critical), Web app (High), File server (Medium)

3. **Vulnerability Correlation**
   - Sample: "System X has unpatched CVE-2026-1234 → Increases risk from 6 to 8 → Triggers urgent remediation"
   - Shows the link between vuln and risk

4. **Remediation Roadmap**
   - Timeline view:
     - Week 1: Patch database (cost $5K, effort 40h)
     - Week 2–4: Network segmentation (cost $15K, effort 120h)
     - Month 2–3: Encryption (cost $50K, effort 80h)
   - Cost and effort per item

5. **Executive Summary Slide**
   - Key metrics: Total assets (47), Critical risks (3), Medium risks (12), Residual risk $2.3M

**Lab Testing Context:**
*"Risk model based on 47 sample assets, NIST guidance, and industry threat data. Demonstrates risk quantification and prioritization approach."*

---

### #08: Phishing Detection Model

**What to Show:**
1. **Model Performance Metrics**
   - Confusion matrix (True Positive, False Positive, True Negative, False Negative)
   - Precision: 96% (visual bar)
   - Recall: 92%
   - F1 Score: 94%
   - ROC curve (if available)

2. **Sample Email Classification**
   - Email headers (From, Subject, Date visible)
   - Model output: "PHISHING (confidence: 97%)"
   - Reasoning: "Urgent language, spoofed sender, suspicious URL detected"

3. **Feature Importance**
   - Bar chart showing which features matter most:
     - Email header validation (SPF/DKIM/DMARC): 22%
     - URL reputation: 18%
     - Urgency language: 15%
     - Domain homoglyph: 12%
     - Others

4. **Active Learning Feedback Loop**
   - Sample: "Analyst marked email as False Positive → Model updated → next similar email handled correctly"

5. **Training Dataset Overview**
   - 10,000 emails total
   - 2,500 phishing (25%)
   - 7,500 legitimate (75%)
   - Validation split: 80/20

**Lab Testing Context:**
*"Trained on public phishing datasets (Enron, MailTraps). Evaluated on 2,000 hold-out test emails; 96% accuracy with 2.1% false positive rate."*

---

### #31: Digital Forensics Lab

**What to Show:**
1. **Disk Acquisition Evidence**
   - Command line: `dd if=/dev/sdX of=image.raw bs=4K conv=noerror status=progress`
   - Hash verification (MD5, SHA256)
   - Output: "Acquired 100GB in 45 minutes, hash verified ✓"

2. **Recovered Files**
   - List of deleted files recovered via Sleuthkit
   - Sample: 12 malware samples in /tmp (recovered with 100% integrity)
   - File details: Name, size, date modified, recovery status

3. **Timeline Reconstruction**
   - Mactime output showing events chronologically:
     - 2026-10-01 14:32 - SSH login from 192.168.1.100
     - 2026-10-01 14:45 - Apache process spawned
     - 2026-10-01 15:47 - Cron job created
   - Color-coded by activity type

4. **Memory Forensics Output**
   - Process list from Volatility
   - Suspicious process: python -m http.server 8888
   - Network connections: Python listening on 0.0.0.0:8888

5. **Chain of Custody Log**
   - Forensic examiner signature
   - Evidence handling procedures logged
   - Tampering detection hash ✓

**Lab Testing Context:**
*"Lab forensics exercise: Compromised Linux system with persistence mechanisms. Demonstrates proper evidence acquisition and artifact recovery procedures."*

---

### #13: Web App Security Scanner

**What to Show:**
1. **Scan Summary Report**
   - URL scanned: https://wordpress.test
   - Duration: 8 minutes
   - Findings: 12 total (3 critical, 4 high, 5 medium)
   - Coverage: 100% of discovered endpoints

2. **Vulnerability Finding Card (sample)**
   - Type: SQL Injection (CWE-89)
   - Severity: CRITICAL (CVSS 9.8)
   - Location: POST /wp-admin/admin-ajax.php?action=get_reviews
   - Parameter: review_id
   - Proof of concept (sanitized, showing technique not payload)

3. **CVSS Score Breakdown**
   - Visual: 9.8 in context (0–10 scale)
   - Attack Vector: Network
   - Attack Complexity: Low
   - Privileges Required: None
   - User Interaction: None

4. **Remediation Guidance**
   - Problem: No input sanitization
   - Fix: Use prepared statements / parameterized queries
   - Priority: Critical (patch immediately)
   - Effort: 1 hour

5. **Report Export Format**
   - Screenshot of PDF report (title page + summary)
   - Shows professional formatting

**Lab Testing Context:**
*"Assessment of intentionally vulnerable WordPress site (Damn Vulnerable WordPress – DVWP). 12 authentic vulnerabilities identified and validated in lab environment."*

---

### #32: Threat Modeling Suite

**What to Show:**
1. **Data Flow Diagram (DFD)**
   - Sample microservices architecture
   - Entities: Web UI, API Gateway, Auth Service, Database
   - Flows: User → API → Database
   - Trust boundaries marked

2. **STRIDE Threat Matrix**
   - Table with columns: Element, Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege
   - Example row: "Service-to-Service Communication" → "Missing: Encryption (STRIDE:I)" → "Risk: 8/10"

3. **Risk Heat Map**
   - 5×5 matrix (Likelihood vs. Impact)
   - Example threats plotted:
     - Unencrypted communication (HIGH likelihood, HIGH impact) → Top-left corner (red zone)
     - DDoS (LOW likelihood, MEDIUM impact) → Lower position

4. **Threat Tree Visualization**
   - Root: "Attacker accesses customer database"
   - Branches: SQL injection, Weak credentials, Misconfiguration
   - Sub-branches with more detail

5. **Control Recommendations**
   - Threat: Unencrypted service-to-service communication
   - Recommended Control: Implement mTLS (mutual TLS)
   - Effort: 30 days
   - Cost: $50K
   - Risk Reduction: High → Medium

**Lab Testing Context:**
*"Threat model of sample e-commerce microservices architecture. Demonstrates systematic threat identification and risk-based control prioritization."*

---

## Technical Tips for Capturing Screenshots

### Best Practices
1. **Redact sensitive data**
   - Use image editor to blur: API keys, real IP addresses, customer names
   - Keep enough visible to prove the tool works

2. **Add context captions**
   - "Lab environment with simulated data"
   - "Test scenario: 50 endpoints, 10K log events"
   - "March 2026 testing phase"

3. **File organization**
   - Naming: `project-17-wazuh-dashboard-01.png` (descending order)
   - Format: PNG (lossless)
   - Resolution: 1440×900 or 1920×1080 (readable on web)
   - Size: Compress to <500KB per image

4. **Placement on case study pages**
   - Insert after "Methodology" section
   - Before "Key Findings" section
   - Max 5 screenshots per project (focus over volume)

### Tools
- **macOS:** Cmd+Shift+4 (select area), Preview.app (edit/blur)
- **Linux:** gnome-screenshot, GIMP (for blurring), ImageMagick (batch resize)
- **Windows:** Snip & Sketch, Paint, Pixlr (online, free)
- **All:** Figma (online, collaborative), Excalidraw (for DFDs/threat trees)

### Image Editing (to redact)
1. Open screenshot in GIMP or Preview
2. Select sensitive text/data
3. Blur or pixelate using blur filter
4. Export as PNG

---

## Implementation Checklist

- [ ] **Wazuh SIEM** — Capture 4 screenshots (dashboard, alert, compliance, rule)
- [ ] **IR Simulator** — Capture 5 screenshots (scenario, timeline, decision tree, results, leaderboard)
- [ ] **Audit Dashboard** — Capture 5 screenshots (compliance card, findings, control map, timeline, audit trail)
- [ ] **GRC Framework** — Capture 5 screenshots (heat map, asset inventory, vuln correlation, roadmap, exec summary)
- [ ] **Phishing Model** — Capture 5 screenshots (metrics, classification, importance, active learning, dataset)
- [ ] **Digital Forensics** — Capture 5 screenshots (acquisition, recovered files, timeline, memory analysis, chain of custody)
- [ ] **Web App Scanner** — Capture 5 screenshots (summary, finding card, CVSS, remediation, report export)
- [ ] **Threat Modeling** — Capture 5 screenshots (DFD, STRIDE matrix, heat map, threat tree, controls)

**Total:** ~40 screenshots to add to portfolio

---

## Timeline to Completion

- **Day 1:** Capture and redact screenshots for 3 top projects (Wazuh, Audit Dashboard, IR Simulator)
- **Day 2:** Capture and redact screenshots for remaining 5 projects
- **Day 3:** Add screenshots to case study pages with captions
- **Day 4:** Review and optimize image sizes/compression
- **Total:** 4 days to full visual coverage

---

## Success Metrics

After adding screenshots:
- Portfolio moves from 8/10 → 9/10 (visual evidence = credibility)
- Hiring managers can quickly understand each project's scope
- Lab environment context is clear (no overreaching claims)
- Projects feel "real" and tested (vs. template-like)

---

**Next Step:** Start with Wazuh SIEM Dashboard (highest ROI for Safaricom target). Capture 4 screenshots, redact any sensitive data, add captions, and update the case study page.
