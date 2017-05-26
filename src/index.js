import vegaEmbed from 'vega-embed';
import { vegaLite as vlTooltip } from 'vega-tooltip';

const VLS = {
    "description": "A scatterplot showing horsepower and miles per gallons for various cars.",
    "data": {"url": "http://vega.github.io/vega-tooltip/data/cars.json"},
    "mark": "circle",
    "encoding": {
        "x": {"field": "Horsepower","type": "quantitative"},
        "y": {"field": "Miles_per_Gallon","type": "quantitative"}
    }
};


vegaEmbed(
    document.querySelector('#chart'),
    VLS,
    {
        mode: 'vega-lite'
    },
    (error, result) => {
        if (error) {
            return console.error(error);
        }
        vlTooltip(result.view, VLS, {});
    }
);
