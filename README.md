# Cybersecurity Portfolio

A GitHub Pages portfolio showcasing hands-on penetration testing, ethical hacking, web application security, Linux security assessment, and vulnerability analysis work.

## Featured projects

1. **Penetration Testing Lab Environment** — VirtualBox, Ubuntu 24.04 Attackbox, host-only networking, Nmap, Ncat and Gobuster.
2. **White-Box Testing: OS Command Injection** — source-code review of a DNS Lookup Utility and identification of CWE-78 command injection.
3. **Black-Box Testing** — network/service enumeration, web enumeration, command injection and reverse-shell validation in an isolated lab.
4. **Linux Environment Review** — shell navigation, system information gathering and configuration-file credential discovery.
5. **WordPress SQL Injection** — wp-google-maps REST API SQL injection, database enumeration, password-hash recovery and administrator access in a deliberately vulnerable lab.
6. **DVWA XSS & Session Security** — reflected/stored XSS and analysis of session-token security on Metasploitable2/DVWA.

## Repository structure

```text
.
├── index.html
├── README.md
├── assets/
│   ├── css/style.css
│   └── js/script.js
├── projects/
│   ├── 01-lab-environment/
│   ├── 02-white-box-command-injection/
│   ├── 03-black-box-testing/
│   ├── 04-linux-environment/
│   ├── 05-wordpress-sqli/
│   └── 06-dvwa-xss/
├── downloads/
│   └── Sanitized PDF case studies for each project
├── reports/
└── .github/workflows/deploy.yml
```

## GitHub Pages deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Create a GitHub repository, for example `cybersecurity-portfolio`.
2. Upload/push this repository to GitHub.
3. In **Settings → Pages**, select **GitHub Actions** as the build/deployment source.
4. Push to `main`.
5. GitHub Actions will publish the static site at `https://<username>.github.io/cybersecurity-portfolio/`.

For a user site, a repository named `<username>.github.io` can be used.

## Responsible disclosure

All technical testing represented here was performed against intentionally vulnerable, isolated lab systems for coursework and security training. The portfolio does not authorize testing systems belonging to other parties.

## Source reports

The original coursework reports used to prepare the project summaries are kept in `reports/` locally. They are deliberately excluded from Git and from the GitHub Pages deployment because they contain coursework and lab details that should not be public. Each project page links to a downloadable, sanitized PDF case study in `downloads/` instead.
