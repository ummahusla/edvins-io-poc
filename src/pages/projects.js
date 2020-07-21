import React, { Component } from 'react';

import Layout from '../components/Layout';
import List from '../components/List';
import SEO from '../components/Seo';

import { projectsData } from '../../content/projects/index';

const ProjectsPage = ({ location }) => {
  const { projects, cta } = projectsData;

  return (
    <Layout location={location}>
      <SEO title="Projects" />

      <h1>Projects</h1>

      <p>List of projects I've been working on over the past years.</p>

      <List data={projects} cta={cta} />
    </Layout>
  );
};
export default ProjectsPage;
