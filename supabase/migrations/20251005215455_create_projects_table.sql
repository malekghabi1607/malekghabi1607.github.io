/*
  # Create projects table

  This migration creates a comprehensive projects table for storing portfolio project information including detailed descriptions, media content, and metadata.

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text) - Project title
      - `slug` (text, unique) - URL-friendly identifier
      - `short_description` (text) - Brief project description for listing pages
      - `long_description` (text) - Detailed project description
      - `technologies` (text[]) - Array of technologies used
      - `features` (text[]) - Array of key features
      - `image_url` (text) - Main project image
      - `video_urls` (text[]) - Array of video URLs
      - `gallery_images` (text[]) - Array of additional image URLs
      - `github_url` (text) - Link to GitHub repository
      - `live_demo_url` (text) - Link to live demo
      - `tech_count` (integer) - Number of technologies used
      - `functionality_count` (integer) - Number of main functionalities
      - `created_at` (timestamptz) - Timestamp of creation
      - `updated_at` (timestamptz) - Timestamp of last update

  2. Security
    - Enable RLS on `projects` table
    - Add policy for public read access (portfolio is public)
    - Add policy for authenticated admin updates (future admin panel)
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  short_description text NOT NULL,
  long_description text,
  technologies text[] DEFAULT '{}',
  features text[] DEFAULT '{}',
  image_url text,
  video_urls text[] DEFAULT '{}',
  gallery_images text[] DEFAULT '{}',
  github_url text,
  live_demo_url text,
  tech_count integer DEFAULT 0,
  functionality_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to projects"
  ON projects
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert projects"
  ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update projects"
  ON projects
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete projects"
  ON projects
  FOR DELETE
  TO authenticated
  USING (true);