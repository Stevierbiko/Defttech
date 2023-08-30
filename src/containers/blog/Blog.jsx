import React from 'react';
import Article from '../../components/article/Article';
import { BoardLayout, Dynamics365NGO, MicrosoftDynamicsNAV, onedrive, dynamics365 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="deft__blog section__padding" id="blog">
    <div className="deft__blog-heading">
      <h1 className="gradient__text">Drive business digitisation, <br /> with the right tools for your industry challenges.</h1>
    </div>
    <div className="deft__blog-container">
      <div className="deft__blog-container_groupA">
        <Article imgUrl={BoardLayout}  text="Deft E-Board" content ="The E-Board solution is a solution that facilitate the operations of a board, virtually. Though it has the capability of a video call, it is much more than that.Schedule Meeting, Set agenda,
Organize Board Packs and take minutes, anywhere,
anytime, on any device."/>
      </div>
      <div className="deft__blog-container_groupB">
        <Article imgUrl={Dynamics365NGO} text="MICROSOFT DYNAMICS CRM (NON-PROFIT,MICRO-FINANCE)" content = "Our Dynamics 365 Customer Relationship Management (CRM) System has a set of solutions."/>
        <Article imgUrl={MicrosoftDynamicsNAV}  text="MICROSOFT DYNAMICS 365 (F&O, AX, NAV, RETAIL)" content ="Combining comprehensive ERP with purpose-built industry capabilities"/>
        <Article imgUrl={onedrive} text="MICROSOFT OFFICE 365 (WORD, TEAMS, ONEDRIVE)" content ="Office 365 is a tool that allows you to work remotely from any device."/>
        <Article imgUrl={dynamics365} text="MICROSOFT DYNAMICS 365 BUSINESS CENTRAL" content ="Dynamics 365 Business Central, the next generation of Microsoft Dynamics NAV, is an all-in-one business management solution."/>
      </div>
    </div>
  </div>
);

export default Blog;
