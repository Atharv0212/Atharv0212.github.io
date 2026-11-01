// Icons are bundled from devicon (colour SVGs) and simple-icons (brand paths).
import androidStudio from 'devicon/icons/androidstudio/androidstudio-original.svg';
import antigravity from 'devicon/icons/antigravity/antigravity-original.svg';
import c from 'devicon/icons/c/c-original.svg';
import cpp from 'devicon/icons/cplusplus/cplusplus-original.svg';
import css from 'devicon/icons/css3/css3-original.svg';
import docker from 'devicon/icons/docker/docker-original.svg';
import git from 'devicon/icons/git/git-original.svg';
import github from 'devicon/icons/github/github-original.svg';
import colab from 'devicon/icons/googlecolab/googlecolab-original.svg';
import html from 'devicon/icons/html5/html5-original.svg';
import javascript from 'devicon/icons/javascript/javascript-original.svg';
import kaggle from 'devicon/icons/kaggle/kaggle-original.svg';
import matlab from 'devicon/icons/matlab/matlab-original.svg';
import matplotlib from 'devicon/icons/matplotlib/matplotlib-original.svg';
import numpy from 'devicon/icons/numpy/numpy-original.svg';
import pandas from 'devicon/icons/pandas/pandas-original.svg';
import python from 'devicon/icons/python/python-original.svg';
import react from 'devicon/icons/react/react-original.svg';
import { siClaudecode, siRiscv } from 'simple-icons';

// Each skill has either `icon` (image URL) or `brand` (simple-icons object).
export const skillCategories = [
  {
    title: 'Languages',
    icon: 'fa-code',
    tag: 'Low → High Level',
    skills: [
      { name: 'C++', detail: 'STL · OOP · DSA', icon: cpp },
      { name: 'C', detail: 'Pointers · Memory', icon: c },
      { name: 'Python', detail: 'Scripting · ML', icon: python },
      { name: 'Assembly', detail: 'RISC-V ISA', brand: siRiscv },
    ],
  },
  {
    title: 'Web',
    icon: 'fa-globe',
    tag: 'Frontend',
    skills: [
      { name: 'JavaScript', detail: 'ES6+ · DOM', icon: javascript },
      { name: 'React', detail: 'Components · Hooks', icon: react },
      { name: 'HTML5', detail: 'Semantic Markup', icon: html },
      { name: 'CSS3', detail: 'Layouts · Styling', icon: css },
    ],
  },
  {
    title: 'Data Science & ML',
    icon: 'fa-chart-simple',
    tag: 'Notebooks',
    skills: [
      { name: 'NumPy', detail: 'Numerical Arrays', icon: numpy },
      { name: 'Pandas', detail: 'DataFrames', icon: pandas },
      { name: 'Matplotlib', detail: 'Visualisation', icon: matplotlib },
      { name: 'MATLAB', detail: 'Numerical Computing', icon: matlab },
      { name: 'Google Colab', detail: 'Cloud GPUs', icon: colab },
      { name: 'Kaggle', detail: 'Datasets · Comps', icon: kaggle },
    ],
  },
  {
    title: 'Tools & AI',
    icon: 'fa-wrench',
    tag: 'Workflow',
    skills: [
      { name: 'Git', detail: 'Version Control', icon: git },
      { name: 'GitHub', detail: 'Collaboration', icon: github },
      { name: 'Docker', detail: 'Containers', icon: docker },
      { name: 'Android Studio', detail: 'Android IDE', icon: androidStudio },
      { name: 'Claude Code', detail: 'AI Coding Agent', brand: siClaudecode },
      { name: 'Antigravity', detail: 'Agentic IDE', icon: antigravity },
    ],
  },
];
