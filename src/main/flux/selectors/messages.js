export default ({ messages: alerts }) => alerts.ids.map(id => alerts.entities[id]);
