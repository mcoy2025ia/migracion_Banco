# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js presentation site that displays PDF documents. Currently hosts "Presentación_Manuel_Coy.pdf" - a presentation about bank migration with AI.

## Development Commands

- `npm run dev` — Start development server at http://localhost:3000 with hot reload
- `npm run build` — Build production bundle
- `npm start` — Start production server (requires `npm run build` first)
- `npm run lint` — Run ESLint on the codebase

## Architecture

**Stack:**
- Next.js 16.2.10 (App Router) with React 19
- TypeScript
- Tailwind CSS 4
- ESLint with Next.js config

**Key Files:**
- `app/layout.tsx` — Root layout; sets metadata and Geist fonts
- `app/page.tsx` — Home page (client component); PDF viewer with download/open buttons
- `public/` — Static assets (PDFs, images)

**Important Note:** This is a newer version of Next.js with potential breaking changes compared to older versions. Review `node_modules/next/dist/docs/` before adding new features (see AGENTS.md).

## Current Functionality

The homepage displays a PDF viewer using an iframe with:
- Download PDF button
- Open in new tab button
- Responsive styling with dark mode support
- Fallback instructions if PDF fails to load

## Adding New Content

To add new PDFs:
1. Place PDF file in the `public/` directory
2. Update the href/src paths in `app/page.tsx`
3. Run `npm run dev` to test locally
