import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';

var data={
	"data": [
		{
			"Name": "Berlin",
			"Headline": "Paramount Fitness Welness",
			"Address": "Puderstr 8 Berlin",
			"Hours": "Today: open till 12",
			"pictures": [
				[
					"https://d301hlh51t6sij.cloudfront.net/images/new/banner-1.jpg",
					"http://www.i-fitness.be/assets/home/care_preview@3x-fa9b87aed62cddb52d4097b30910cc693b14e07921d57c81f64bde5c123f6f6c.jpg",
					"https://iq.intel.com/wp-content/uploads/sites/18/2016/04/12513932_1106598852724701_1796678976534595615_o-2-e1460043653339.jpg",
					"https://blueprintfitnessatlanta.com/wp-content/uploads/2016/07/iStock_000025435822Large.jpg",
					"https://d22inbfp2wq0a3.cloudfront.net/assets/home-carousel/crunchism--group-fitness-studios-db5d2816d816fb787bc237e8813dde9572af19bebd8cc3998b8c8be8f659f214.jpg",
					"https://assets3.thrillist.com/v1/image/1748020/size/tmg-article_default_mobile.jpg"
				]
			]
		},
		{
			"Name": "Hamburg",
			"Headline": "Quasi culpa iaculis ",
			"Address": "Puderstr 8 Hamburg",
			"Hours": "Today: open till 9",
			"pictures": [
				[
					"http://www.hellomagazine.com/imagenes/healthandbeauty/health-and-fitness/2016122335340/fitness-trends-to-expect-uk-2017/0-188-820/Exercise-t.jpg",
					"http://www.i-fitness.be/assets/home/care_preview@3x-fa9b87aed62cddb52d4097b30910cc693b14e07921d57c81f64bde5c123f6f6c.jpg",
					"https://iq.intel.com/wp-content/uploads/sites/18/2016/04/12513932_1106598852724701_1796678976534595615_o-2-e1460043653339.jpg",
					"https://blueprintfitnessatlanta.com/wp-content/uploads/2016/07/iStock_000025435822Large.jpg",
					"https://d22inbfp2wq0a3.cloudfront.net/assets/home-carousel/crunchism--group-fitness-studios-db5d2816d816fb787bc237e8813dde9572af19bebd8cc3998b8c8be8f659f214.jpg",
					"https://assets3.thrillist.com/v1/image/1748020/size/tmg-article_default_mobile.jpg"
				]
			]
		},
		{
			"Name": "Munich",
			"Headline": "Potenti nulla sit ornare ",
			"Address": "Puderstr 8 Munich",
			"Hours": "Today: open till 11",
			"pictures": [
				[
					"https://d301hlh51t6sij.cloudfront.net/images/new/banner-1.jpg",
					"http://www.i-fitness.be/assets/home/care_preview@3x-fa9b87aed62cddb52d4097b30910cc693b14e07921d57c81f64bde5c123f6f6c.jpg",
					"https://iq.intel.com/wp-content/uploads/sites/18/2016/04/12513932_1106598852724701_1796678976534595615_o-2-e1460043653339.jpg",
					"https://blueprintfitnessatlanta.com/wp-content/uploads/2016/07/iStock_000025435822Large.jpg",
					"https://d22inbfp2wq0a3.cloudfront.net/assets/home-carousel/crunchism--group-fitness-studios-db5d2816d816fb787bc237e8813dde9572af19bebd8cc3998b8c8be8f659f214.jpg",
					"https://assets3.thrillist.com/v1/image/1748020/size/tmg-article_default_mobile.jpg"
				]
			]
		},
		{
			"Name": "Cologne",
			"Headline": "Delectus, egestas arcu",
			"Address": "Puderstr 8 Cologne",
			"Hours": "Today: open till 16",
			"pictures": [
				[
					"http://www.hellomagazine.com/imagenes/healthandbeauty/health-and-fitness/2016122335340/fitness-trends-to-expect-uk-2017/0-188-820/Exercise-t.jpg",
					"http://www.i-fitness.be/assets/home/care_preview@3x-fa9b87aed62cddb52d4097b30910cc693b14e07921d57c81f64bde5c123f6f6c.jpg",
					"https://iq.intel.com/wp-content/uploads/sites/18/2016/04/12513932_1106598852724701_1796678976534595615_o-2-e1460043653339.jpg",
					"https://blueprintfitnessatlanta.com/wp-content/uploads/2016/07/iStock_000025435822Large.jpg",
					"https://d22inbfp2wq0a3.cloudfront.net/assets/home-carousel/crunchism--group-fitness-studios-db5d2816d816fb787bc237e8813dde9572af19bebd8cc3998b8c8be8f659f214.jpg",
					"https://assets3.thrillist.com/v1/image/1748020/size/tmg-article_default_mobile.jpg"
				]
			]
		}
	]
};

render( <AppContainer><App carousel={data} /></AppContainer>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./app', () => {
    render(
      <AppContainer>
        <App carousel={data} />
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
