# "Architecture First" — PENNIO Founder Acquisition Campaign

Positions PENNIO as the brand architecture studio for visionary founders: the
partner that builds the meaning, system, and voice a founder's brand stands
on, before web and growth spend get involved. Copy pulls directly from
PENNIO's live site language ("brand architecture," "one connected system,"
the manual-review / 48-hour-response intake model) rather than inventing new
claims — every stat and process detail here is consistent with `index.html`.

## The Funnel

Cold ad traffic is not ready to "Apply" — that is a big ask for someone who
has never heard of PENNIO. So the campaign now runs two stages instead of
sending every click straight at the application form:

```
Ad (cold traffic)  →  /audit landing page  →  email capture
    ↓                                              ↓
"Get the free                              Instant PDF download
 checklist"                                + autoresponse email
                                                    ↓
                                    Nurture / retarget toward
                                         pennio.agency/#apply
```

**`flyer-lead-magnet.html`** is the primary top-of-funnel ad and should get
the majority of cold-traffic budget. `flyer-authority.html` and
`flyer-cost.html` work as either top-of-funnel (pointing to `/audit`) or
direct-response (pointing to `/#apply`) depending on how warm the audience
is — swap the CTA line in the HTML if you retarget them straight at Apply.
`flyer-exclusivity.html` and the carousel are bottom-of-funnel: better
suited to warm/retargeted audiences who already know what PENNIO is, since
they ask for the bigger commitment (apply to the studio) directly.

## The Digital Product (Lead Magnet)

**The Brand Architecture Checklist** — a free 15-point self-audit across the
same three pillars the carousel already teaches (Meaning, System, Voice).
Genuinely useful on its own, and it pre-sells PENNIO's actual diagnostic
process, so anyone who scores low has just diagnosed their own need for the
studio.

- `lead-magnet/checklist-source.html` — the editable source (6-page A4,
  print-ready CSS, no external JS dependency).
- `lead-magnet/pennio-brand-architecture-checklist.pdf` — the rendered PDF.
- A copy is also placed at `/audit/pennio-brand-architecture-checklist.pdf`
  at the repo root so the live landing page can link and serve it directly.

## The Landing Page

**`/audit/index.html`** (repo root, not inside `campaign/`) — the actual
site file that goes live at `pennio.agency/audit`. Matches the main site's
exact brand tokens (`#F26522` / `#050505` / Inter) and reuses the same
FormSubmit + honeypot + AJAX-success pattern as the main site's apply form,
so the founder never leaves the page:

1. Name + email only (low friction — this is a lead magnet, not the
   application).
2. On submit: inline success state reveals a direct PDF download button
   immediately (no dependency on email deliverability).
3. A FormSubmit `_autoresponse` field also emails the lead a copy of the
   direct download link as backup.
4. Meta Pixel (same pixel ID as the main site) fires a `Lead` event on
   successful submit, so ad platforms can build a "downloaded the
   checklist but hasn't applied" retargeting audience.
5. Success state includes a secondary link straight to `/#apply` for
   anyone who already knows their score is low and wants to skip ahead.

**Needs confirmation before this goes live:** the landing page reuses the
main site's FormSubmit endpoint ID (`ea0da421e8e6e82457be40792262eeed`), so
checklist leads land in the same inbox as project applications, tagged with
a distinct `_subject` line ("New Lead: Brand Architecture Checklist") so
they're easy to filter separately. Confirm that's the inbox you want these
in — if not, swap in a second FormSubmit ID before pushing.

## Single-Ad Concepts (4 headline variants, for split testing)

Each ships as a self-contained HTML file with a 1:1 / 4:5 / 9:16 format
switcher and a 3× PNG export button. Pre-rendered PNGs for all formats are
in `exports/`.

1. **`flyer-lead-magnet.html`** — the top-of-funnel ad. *"Find out if your
   brand can survive its own ad spend."* Points to `pennio.agency/audit`.
   Lowest-friction ask in the set; use this for cold prospecting.
2. **`flyer-authority.html`** — reframe hook. *"Your brand is not a logo.
   It's the architecture everything else stands on."*
3. **`flyer-cost.html`** — cost/agitation hook. *"Stop paying ads to send
   traffic to a brand that hasn't decided what it is."*
4. **`flyer-exclusivity.html`** — selection hook. *"We don't build brands
   for everyone. Only founders building something real."* Bottom-of-funnel;
   best against warm/retargeted audiences.

Run these as parallel ad sets on the same budget and let performance decide
which hook a given audience segment responds to.

## Carousel Ad

**`carousel.html`** — 9-slide narrative arc for Meta and LinkedIn carousel
placements (and organic IG/LinkedIn posting): the pattern founders fall
into, why that's an architecture problem and not an ad problem, what PENNIO
actually builds, and who gets accepted into the studio. Ends on the domain
only. Best used retargeting warm audiences (checklist downloaders, page
engagers) rather than pure cold prospecting. Includes per-slide PNG export,
a batch "all 9 PNGs" export, and a one-click PDF deck.

## Format Guidance

- **1:1** — LinkedIn, X/Twitter, Meta feed
- **4:5** — Meta/Instagram feed (best default engagement)
- **9:16** — Instagram/Facebook Stories, Reels cover frame

## Voice Rules Applied

No em dashes. No filler transitions or corporate abstraction. Every claim
in the copy (48-hour response, manual review, limited intake) is a real
operating detail already stated on pennio.agency, not a fabricated stat.
