var i=1,t,l = [
  ['இப்போது', 'சற்று நேரம் முன்பு'],
  ['நொடிக', 'நொடிகளில்'],
  ['நிமிடத்திற்க', 'நிமிடத்தில்'],
  ['நிமிடத்திற்க', 'நிமிடங்களில்'],
  ['மணி நேரத்திற', 'மணி நேரத்திற்குள்'],
  ['மணி நேரத்திற', 'மணி நேரத்திற்குள்'],
  ['நாளுக', 'நாளில்'],
  ['நாட்களுக', 'நாட்களில்'],
  ['வாரத்திற', 'வாரத்தில்'],
  ['வாரங்களுக', 'வாரங்களில்'],
  ['மாதத்திற', 'மாதத்தில்'],
  ['மாதங்களுக', 'மாதங்களில்'],
  ['வருடத்திற', 'வருடத்தில்'],
  ['வருடங்களுக', 'வருடங்களில்']
];
for(; i<14;) l[i] = (t = (i&1?'%s ':'1 '), [t+l[i][0]+'்கு முன்', t+l[i++][1]]);
/*
['இப்போது', 'சற்று நேரம் முன்பு'],
['%s நொடிக்கு முன்', '%s நொடிகளில்'],
['1 நிமிடத்திற்க்கு முன்', '1 நிமிடத்தில்'],
['%s நிமிடத்திற்க்கு முன்', '%s நிமிடங்களில்'],
['1 மணி நேரத்திற்கு முன்', '1 மணி நேரத்திற்குள்'],
['%s மணி நேரத்திற்கு முன்', '%s மணி நேரத்திற்குள்'],
['1 நாளுக்கு முன்', '1 நாளில்'],
['%s நாட்களுக்கு முன்', '%s நாட்களில்'],
['1 வாரத்திற்கு முன்', '1 வாரத்தில்'],
['%s வாரங்களுக்கு முன்', '%s வாரங்களில்'],
['1 மாதத்திற்கு முன்', '1 மாதத்தில்'],
['%s மாதங்களுக்கு முன்', '%s மாதங்களில்'],
['1 வருடத்திற்கு முன்', '1 வருடத்தில்'],
['%s வருடங்களுக்கு முன்', '%s வருடங்களில்']
*/
module.exports = function(number, index) {
  return l[index];
};
