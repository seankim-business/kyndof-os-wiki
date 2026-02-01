---
layout: default
title: "Numbering Convention"
parent: "Standards"
grand_parent: "SOP Library"
---

# SOP Numbering Convention

## Purpose

Standardized SOP ID numbering ensures:
- Unique identification of each procedure
- Clear departmental ownership at a glance
- Logical grouping by category
- Scalability as organization grows

## Numbering Format

**Format:** `SOP-XXX`

Where `XXX` is a three-digit number assigned by department and category.

## Department & Category Ranges

### 2000atelier (001-099)

| Range | Category | Owner | Example |
|-------|----------|-------|---------|
| 001-009 | Design | Creative Director | SOP-001: Design Brief Intake |
| 010-019 | Pattern | Pattern Team Lead | SOP-010: Measurement Collection |
| 020-029 | Production - Cutting & Prep | Production Manager | SOP-020: Cutting Standards |
| 030-039 | Production - Sewing & Assembly | Production Manager | SOP-030: Seam Construction Standards |
| 040-049 | Production - Finishing | Production Manager | SOP-040: Pressing & Final Touches |
| 050-059 | Quality Assurance | Production Manager | SOP-050: Quality Inspection Checklist |
| 060-099 | Reserved | - | Future expansion |

---

### Brand Ops (100-199)

| Range | Category | Owner | Example |
|-------|----------|-------|---------|
| 100-109 | Sales - Inquiry & Qualification | Sales Manager | SOP-100: Client Inquiry Response |
| 110-119 | Sales - Quoting & Contracting | Sales Manager | SOP-110: Quote Preparation |
| 120-129 | Marketing - Content Creation | Marketing Manager | SOP-120: Social Media Content Creation |
| 130-139 | Marketing - Campaign Management | Marketing Manager | SOP-130: Campaign Launch Process |
| 140-149 | Marketing - Analytics & Reporting | Marketing Manager | SOP-140: Monthly Marketing Report |
| 150-159 | Customer Success | Sales Manager | SOP-150: Post-Delivery Follow-Up |
| 160-199 | Reserved | - | Future expansion |

---

### Corp Ops (200-299)

| Range | Category | Owner | Example |
|-------|----------|-------|---------|
| 200-209 | HR - Recruiting & Hiring | HR Manager | SOP-200: Job Posting Process |
| 210-219 | HR - Onboarding & Training | HR Manager | SOP-210: New Hire Onboarding |
| 220-229 | HR - Performance & Development | HR Manager | SOP-220: Annual Performance Review |
| 230-239 | Finance - Accounts Receivable | CFO | SOP-230: Invoice Processing |
| 240-249 | Finance - Accounts Payable | CFO | SOP-240: Vendor Payment Processing |
| 250-259 | Finance - Payroll | CFO | SOP-250: Payroll Processing |
| 260-269 | Finance - Reporting & Closing | CFO | SOP-260: Monthly Financial Close |
| 270-279 | IT & Systems | IT Manager | SOP-270: New User Account Setup |
| 280-289 | Facilities & Operations | Operations Manager | SOP-280: Studio Maintenance Checklist |
| 290-299 | Reserved | - | Future expansion |

---

### Cross-Functional & Special (900-999)

| Range | Category | Owner | Example |
|-------|----------|-------|---------|
| 900-909 | Crisis Management | COO | SOP-900: Emergency Response Protocol |
| 910-919 | Compliance & Legal | CFO | SOP-910: Contract Review Process |
| 920-929 | Strategic Planning | CEO | SOP-920: Annual Strategic Planning |
| 930-939 | Partnerships & Business Development | CEO | SOP-930: Partnership Evaluation |
| 940-999 | Reserved | - | Future expansion |

---

## Assignment Rules

### Rule 1: Department Ownership
SOP ID primary digit(s) indicate owning department:
- **0XX:** 2000atelier
- **1XX:** Brand Ops
- **2XX:** Corp Ops
- **9XX:** Cross-functional

### Rule 2: Category Grouping
Within department ranges, SOPs group by category in 10-number blocks.

### Rule 3: Sequential Assignment
Within category, assign numbers sequentially starting from the first number in the range.

**Example:** Design category (001-009)
- First SOP: SOP-001
- Second SOP: SOP-002
- Third SOP: SOP-003
- etc.

### Rule 4: No Reuse of Retired IDs
Once an SOP ID is retired/archived, that number is never reassigned. This prevents confusion and maintains historical integrity.

### Rule 5: Range Expansion
If a category range fills (all 10 numbers used), expand to next available range within the same department.

**Example:** If Design (001-009) fills:
- Expand to 060-069 within 2000atelier department
- Update this convention document to reflect new range
- Notify all stakeholders of expansion

## SOP ID Lifecycle

### Assignment Process
1. SOP author identifies appropriate category
2. Author requests next available SOP ID from category owner
3. Category owner assigns next sequential number in range
4. Category owner updates SOP Registry (tracks assigned IDs)
5. Author uses assigned ID in SOP frontmatter and filename

### Retirement Process
1. SOP marked as "Archived" status
2. SOP ID noted in SOP Registry as "Retired - Do Not Reuse"
3. SOP ID remains in registry for historical reference
4. If SOP superseded by new version, new SOP gets NEW ID (not same ID with incremented version)

**Example:**
- SOP-001 v1.0 "Design Brief Intake" → Archived
- SOP-009 v1.0 "Design Brief Intake (New Process)" → New ID assigned

## SOP Registry

The SOP Registry is the master list of all assigned SOP IDs.

**Location:** `/wiki/sops/registry.md` (updated quarterly)

**Contents:**
- SOP ID
- SOP Title
- Department
- Category
- Status (Active, Draft, Archived)
- Owner Position
- Effective Date
- Link to SOP document

## Quick Reference Table

| Department | Range | Current Usage | Available IDs |
|------------|-------|---------------|---------------|
| 2000atelier | 001-099 | ~15 SOPs | ~84 available |
| Brand Ops | 100-199 | ~10 SOPs | ~90 available |
| Corp Ops | 200-299 | ~12 SOPs | ~88 available |
| Cross-Functional | 900-999 | ~5 SOPs | ~95 available |

**Total Capacity:** 999 SOPs
**Current Usage:** ~42 SOPs
**Utilization:** ~4%

## Examples

### Correct Usage

✅ **SOP-001:** Design Brief Intake (2000atelier > Design)
- Clearly in Design category (001-009)
- Sequential from range start

✅ **SOP-100:** Client Inquiry Response (Brand Ops > Sales)
- Clearly in Sales category (100-109)
- Sequential from range start

✅ **SOP-230:** Invoice Processing (Corp Ops > Finance AR)
- Clearly in Finance AR category (230-239)
- Sequential from range start

### Incorrect Usage

❌ **SOP-15:** Pattern Creation
- Missing leading zero (should be SOP-015)

❌ **SOP-250:** Design Brief Intake
- Wrong department range (250 is Finance, not Design)

❌ **SOP-001B:** Design Brief Intake (Revised)
- Cannot use letter suffixes
- Revised versions get NEW SOP ID

## Version Control vs. SOP ID

**Important Distinction:**

- **SOP ID:** Unique identifier for the procedure (never changes once assigned)
- **Version Number:** Tracks iterations of the same procedure (increments with each revision)

**Example Evolution:**
- SOP-001 v1.0 (Initial release)
- SOP-001 v1.1 (Minor update - clarification added)
- SOP-001 v2.0 (Major update - process overhauled)

**If process fundamentally changes (different workflow):**
- Retire SOP-001 (archive as v2.0 final)
- Create NEW SOP with new ID (e.g., SOP-009)

## Questions & Support

**Who assigns SOP IDs?**
Category owner (see ranges table above)

**What if my category range is full?**
Contact Operations Manager to expand range

**Can I reserve an SOP ID?**
No. IDs assigned only when SOP reaches "Draft" status

**What if I need to split an SOP into multiple SOPs?**
Each new SOP gets its own new ID (sequential within category)

---

**Document Owner:** Operations Manager
**Last Updated:** 2026-02-02
**Next Review:** 2027-02-02
