import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MediumPost() {
  const [post, setPost] = useState({});
  const [postIsReady, setPostIsReady] = useState(false);

  const mediumURL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@eseemmanuel99&api_key=gmbih3wbizw7tv3eu5taza4ms4x8bkkhwpfz6e9f';

  useEffect(() => {
    if (postIsReady === false) {
      fetch(mediumURL)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setPostIsReady(true);
          setPost(data.items[0]);
        })
        .catch(err => {
          console.log(err.message);
        })
    }
  }, [post, postIsReady])

  const style = {
    service_container: {
      height: '60%',
      width: '100%',
      overflow: 'hidden',
    },
    img: {
      width: '100%',
      marginTop: '-100px',
    }
  }

  return (
    <>
      <Link to={post.link}>
        <div style={style.service_container} className='__service_container position-relative'>
          <img style={style.img} className='position-absolute top-0 start-0' src={post.thumbnail} alt={post.title} />

          <div className='__post_title position-absolute start-0 bottom-0 w-100 bg-white py-3 px-5 text-center'>
            <span className='text-primary fw-bold h6 m-0'>{post.title} - {post.author}</span>
          </div>
        </div>
      </Link>
    </>
  )
}

















// {
//   "title": "“WHEN WE SAY “THEY”, WHO DO WE MEAN?” OR NOTES ON AN INHERITED GRAVEYARD.",
//     "pubDate": "2020-10-29 22:15:01",
//       "link": "https://medium.com/@eseemmanuel99/when-we-say-they-who-do-we-mean-or-notes-on-an-inherited-graveyard-6b9db4afc0d?source=rss-931a4ad8e9b------2",
//         "guid": "https://medium.com/p/6b9db4afc0d",
//           "author": "Ese Emmanuel",
//             "thumbnail": "https://cdn-images-1.medium.com/max/1024/1*njjD4guPegJxvs0pqGmN6A.jpeg",
//               "description": "\n<figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/1024/1*njjD4guPegJxvs0pqGmN6A.jpeg\"></figure><p><strong>“WHEN WE SAY “THEY”, WHO DO WE MEAN?” OR NOTES ON AN INHERITED GRAVEYARD.</strong></p>\n<p>(i)</p>\n<p>You sit on the toilet seat, and you try to pray. A gospel song plays in the background: <em>I’m no longer a slave to fear, I am a child of God</em>. But you feel like a slave to fear. You feel like a slave to guilt. A slave to despair. Being a child of God does not seem to help. You try to pray in tongues. Ever since you started reexamining your faith, months ago, you have not prayed in tongues. You have barely prayed. Anyway, you begin to pray in tongues, and your whole body dissolves into a series of vibrations. Your mind is oscillating at an incomprehensible frequency—we can’t comprehend this much sorrow. Tears carve parallel paths across your face, meeting to form a single flowing stream at your chin. Your body is drenched with the tears which have continued to flow, unbidden. You cry and pray for some minutes. You stop praying. Why exactly did you pray in the first place? For the soldiers to not shoot? They are shooting, anyway. For people to not die? They have died, anyway. For this grief to be taken off you? That’s something beyond the efficacy of prayer. Your grief is a cross you have to carry, yours alone to bear. Or not. Your body vibrates on the toilet seat, as your face remains covered in tears. But you will not pray.</p>\n<p>(ii)</p>\n<p>You see a tweet. Someone, a brother, is crying for help. His sister is stranded in the midst of a shooting. But she has found a church around. But she sighed sighs of relief. But she thought she had found refuge, security. The name of the Lord is a strong Tower, the righteous run in and are saved. But the people at the gate turned her out. She is not allowed to wear trousers inside an Anglican church. No, not even if her life is at risk. The people in the comments say:</p>\n<p>“<em>Sorry, but we don’t wear trouser in Anglican churches</em>”.</p>\n<p><em>“I hope this is not false information because we should have moved past that now”.</em></p>\n<p><em>“She should remove d trouser &amp; force herself in”.</em></p>\n<p><em>“I don’t want to believe they stopped her because of trousers”.</em></p>\n<p><em>“Let’s follow each other”.</em></p>\n<p><em>“Religion will kill us in this country”.</em></p>\n<p>(iii)</p>\n<p>You fall asleep to the sound of gunshots. At first, you are bothered. Is the gate locked? You run to ask your brother. He is sarcastic. “You think if they want to shoot us, they will not burst down the gate with bullets?” You sigh. At least the gate is locked. At least there is a semblance of security, however fickle it is. The gunshots continue. You feel fear. You rationalize the fear. <em>It is just policemen trying to enforce the curfew.</em> You text a friend. He is almost as livid as you are, even though he is in a different country. They may shut down the internet. You try to download a VPN. Gunshot. VPN fails to download. Gunshot. Terrible network. Gunshot.</p>\n<p>— Tell me what I can do.</p>\n<p>– Can you download NordVPN instead?</p>\n<p>— Okay, I’ll try that.</p>\n<p>– I have a subscription.</p>\n<p>— It’s taking so long to install. Installed.</p>\n<p>– Alright, log in with this.</p>\n<p>Gunshot. Gunshot. Gunshot. By the time you are falling asleep, the sound of the gunshots seems as normal as the grunts your baby sister makes while she dreams her long, warless dreams, where the government does not kill people singing on their knees.</p>\n<p>(iv)</p>\n<p><strong>Twitter</strong>.</p>\n<p>Today, 20/10/20, I have wept. There is a phrase stuck, stuck in my head. I can’t get rid of it. “We can’t comprehend this much sorrow”. I can’t comprehend this much sorrow. How can one person understand the sadness of an entire nation? With what mechanism do I translate this?</p>\n<p><em>Send</em>.</p>\n<p><strong>Twitter</strong>.</p>\n<p>I have been thinking about a line from Tomas Tranströmer’s poem, Two Cities. “Take up your grave and walk”. Perhaps this is a response to something someone said, about Nigerians being born into a coffin. This is neither faith nor optimism. Just take up your graves and walk.</p>\n<p><em>Send</em>.</p>\n<p>(v)</p>\n<p>He tweets: Nigeria will not end me.</p>\n<p>Less than three hours later, his photograph surfaces on the internet. He is on the ground, wrapped in a bloodied Nigerian flag. He is dead, but there is still blood streaming from the wound in his neck, staining the dirt. He is dead. Nigeria ended him.</p>\n<p>(vi)</p>\n<p>They killed him. They shot at peaceful protesters who were singing the national anthem. They shot protesters who were on their knees. They took away the dead bodies. They took away the cameras. They refused to address the public. They denied the shooting. They claimed that there were no fatalities. They ignored the massacre, in their public address. They planted a camcorder. They hoarded palliatives. They looted public funds. They called tax-paying citizens, “children”. They failed to end police brutality. They ordered the Lekki shooting. They hate us.</p>\n<p>(vii)</p>\n<p>When we say “they”, who do we mean?</p>\n<img src=\"https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=6b9db4afc0d\" width=\"1\" height=\"1\" alt=\"\">\n",
// "content": "\n<figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/1024/1*njjD4guPegJxvs0pqGmN6A.jpeg\"></figure><p><strong>“WHEN WE SAY “THEY”, WHO DO WE MEAN?” OR NOTES ON AN INHERITED GRAVEYARD.</strong></p>\n<p>(i)</p>\n<p>You sit on the toilet seat, and you try to pray. A gospel song plays in the background: <em>I’m no longer a slave to fear, I am a child of God</em>. But you feel like a slave to fear. You feel like a slave to guilt. A slave to despair. Being a child of God does not seem to help. You try to pray in tongues. Ever since you started reexamining your faith, months ago, you have not prayed in tongues. You have barely prayed. Anyway, you begin to pray in tongues, and your whole body dissolves into a series of vibrations. Your mind is oscillating at an incomprehensible frequency—we can’t comprehend this much sorrow. Tears carve parallel paths across your face, meeting to form a single flowing stream at your chin. Your body is drenched with the tears which have continued to flow, unbidden. You cry and pray for some minutes. You stop praying. Why exactly did you pray in the first place? For the soldiers to not shoot? They are shooting, anyway. For people to not die? They have died, anyway. For this grief to be taken off you? That’s something beyond the efficacy of prayer. Your grief is a cross you have to carry, yours alone to bear. Or not. Your body vibrates on the toilet seat, as your face remains covered in tears. But you will not pray.</p>\n<p>(ii)</p>\n<p>You see a tweet. Someone, a brother, is crying for help. His sister is stranded in the midst of a shooting. But she has found a church around. But she sighed sighs of relief. But she thought she had found refuge, security. The name of the Lord is a strong Tower, the righteous run in and are saved. But the people at the gate turned her out. She is not allowed to wear trousers inside an Anglican church. No, not even if her life is at risk. The people in the comments say:</p>\n<p>“<em>Sorry, but we don’t wear trouser in Anglican churches</em>”.</p>\n<p><em>“I hope this is not false information because we should have moved past that now”.</em></p>\n<p><em>“She should remove d trouser &amp; force herself in”.</em></p>\n<p><em>“I don’t want to believe they stopped her because of trousers”.</em></p>\n<p><em>“Let’s follow each other”.</em></p>\n<p><em>“Religion will kill us in this country”.</em></p>\n<p>(iii)</p>\n<p>You fall asleep to the sound of gunshots. At first, you are bothered. Is the gate locked? You run to ask your brother. He is sarcastic. “You think if they want to shoot us, they will not burst down the gate with bullets?” You sigh. At least the gate is locked. At least there is a semblance of security, however fickle it is. The gunshots continue. You feel fear. You rationalize the fear. <em>It is just policemen trying to enforce the curfew.</em> You text a friend. He is almost as livid as you are, even though he is in a different country. They may shut down the internet. You try to download a VPN. Gunshot. VPN fails to download. Gunshot. Terrible network. Gunshot.</p>\n<p>— Tell me what I can do.</p>\n<p>– Can you download NordVPN instead?</p>\n<p>— Okay, I’ll try that.</p>\n<p>– I have a subscription.</p>\n<p>— It’s taking so long to install. Installed.</p>\n<p>– Alright, log in with this.</p>\n<p>Gunshot. Gunshot. Gunshot. By the time you are falling asleep, the sound of the gunshots seems as normal as the grunts your baby sister makes while she dreams her long, warless dreams, where the government does not kill people singing on their knees.</p>\n<p>(iv)</p>\n<p><strong>Twitter</strong>.</p>\n<p>Today, 20/10/20, I have wept. There is a phrase stuck, stuck in my head. I can’t get rid of it. “We can’t comprehend this much sorrow”. I can’t comprehend this much sorrow. How can one person understand the sadness of an entire nation? With what mechanism do I translate this?</p>\n<p><em>Send</em>.</p>\n<p><strong>Twitter</strong>.</p>\n<p>I have been thinking about a line from Tomas Tranströmer’s poem, Two Cities. “Take up your grave and walk”. Perhaps this is a response to something someone said, about Nigerians being born into a coffin. This is neither faith nor optimism. Just take up your graves and walk.</p>\n<p><em>Send</em>.</p>\n<p>(v)</p>\n<p>He tweets: Nigeria will not end me.</p>\n<p>Less than three hours later, his photograph surfaces on the internet. He is on the ground, wrapped in a bloodied Nigerian flag. He is dead, but there is still blood streaming from the wound in his neck, staining the dirt. He is dead. Nigeria ended him.</p>\n<p>(vi)</p>\n<p>They killed him. They shot at peaceful protesters who were singing the national anthem. They shot protesters who were on their knees. They took away the dead bodies. They took away the cameras. They refused to address the public. They denied the shooting. They claimed that there were no fatalities. They ignored the massacre, in their public address. They planted a camcorder. They hoarded palliatives. They looted public funds. They called tax-paying citizens, “children”. They failed to end police brutality. They ordered the Lekki shooting. They hate us.</p>\n<p>(vii)</p>\n<p>When we say “they”, who do we mean?</p>\n<img src=\"https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=6b9db4afc0d\" width=\"1\" height=\"1\" alt=\"\">\n",
// "enclosure": { },
// "categories": []
// }