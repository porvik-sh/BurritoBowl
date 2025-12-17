import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { IoSchool } from 'react-icons/io5';
import { useTheme } from "next-themes";

const Timeline = () => {
  const { theme } = useTheme();
  const [themeStatus, setThemeStatus] = useState<any | null>(null);


  useEffect(() => {
    setThemeStatus(theme);
  }, [theme])

  return (
    <div className="w-[70%]">
      <VerticalTimeline lineColor="#e9ecef">
      <VerticalTimelineElement
          id="vertical-timeline"
          contentStyle={{
            background: themeStatus === 'dark' ? '#22223b' : '#F3F4F6', color: theme === 'dark' ? 'white' : 'black'
          }}
          contentArrowStyle={{ borderRight: '#22223b' }}

          className="vertical-timeline-element--education"
          date="august 2024 - now"
          iconStyle={{ background: "#839788", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Application Developer</h3>
          <h4 className="text-sm text-gray-400 vertical-timeline-element-subtitle">Westinghouse</h4>
          <p>
            Angular, Typescript, C#, ASP.NET, SQL, MSSQL, DevOps, Azure Pipelines, PrimenNG, PrimeFlex
          </p>
        </VerticalTimelineElement>
        
      <VerticalTimelineElement
          id="vertical-timeline"
          contentStyle={{
            background: themeStatus === 'dark' ? '#22223b' : '#F3F4F6', color: theme === 'dark' ? 'white' : 'black'
          }}
          contentArrowStyle={{ borderRight: '#22223b' }}

          className="vertical-timeline-element--education"
          date="november 2023 - august 2024"
          iconStyle={{ background: "#839788", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Junior Application Developer</h3>
          <h4 className="text-sm text-gray-400 vertical-timeline-element-subtitle">Westinghouse</h4>
          <p>
            Angular, Typescript, C#, ASP.NET, SQL, MSSQL
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          id="vertical-timeline"
          contentStyle={{
            background: themeStatus === 'dark' ? '#22223b' : '#F3F4F6', color: theme === 'dark' ? 'white' : 'black'
          }}
          contentArrowStyle={{ borderRight: '#22223b' }}

          className="vertical-timeline-element--education"
          date="march 2022 - october 2023"
          iconStyle={{ background: "#839788", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Junior Software Developer</h3>
          <h4 className="text-sm text-gray-400 vertical-timeline-element-subtitle">Capgemini</h4>
          <p>
            React, Typescript, C#, Sharepoint Framework, Adaptive Cards
            Extensions, Specflow, Xamarin.Android
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          id="vertical-timeline"
          className="vertical-timeline-element--education"
          contentStyle={{
            background: themeStatus === 'dark' ? '#22223b' : '#F3F4F6', color: theme === 'dark' ? 'white' : 'black'
          }}
          date="STS_2024"
          iconStyle={{ background: "#839788", color: "#fff" }}
          icon={<IoSchool />}
        >
          <h3 className="vertical-timeline-element-title font-bold">My First Medicine and IT integration Research.</h3>
          <h4 className="text-sm text-gray-400 vertical-timeline-element-subtitle">Indian Council of Medicine & Research ,New Delhi</h4>
          <p>
            
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          id="vertical-timeline"
          className="vertical-timeline-element--education"
          contentStyle={{
            background: themeStatus === 'dark' ? '#22223b' : '#F3F4F6', color: theme === 'dark' ? 'white' : 'black'
          }}
          date="April 2021 - March 2027"
          iconStyle={{ background: "#839788", color: "#fff" }}
          icon={<IoSchool />}
        >
          <h3 className="vertical-timeline-element-title font-bold">CLINICAL ROLE🩺</h3>
          <h4 className="text-sm text-gray-400 vertical-timeline-element-subtitle">Bachelor of Medicine and Bachelors of Surgery</h4>
          <p>
            Pt. B. D. SHARMA UNIVERSITY OF HEALTH SCIENCES, ROHTAK
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
