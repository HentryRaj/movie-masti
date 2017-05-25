'use strict';

import mongoose from 'mongoose';

var MovietheatresmappingendpointSchema = new mongoose.Schema({
TheatreName: String,
City: String,
MovieName: String,
PlaceName: String,
Dates: [{
type: String
}],
Times:[{
  type: String
}]
});

export default mongoose.model('Movietheatresmappingendpoint', MovietheatresmappingendpointSchema);
