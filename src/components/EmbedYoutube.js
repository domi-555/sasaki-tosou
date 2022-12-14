import React, { useState } from 'react'
import * as styles from '../styles/embedyoutube.module.scss'

const EmbedYoutube = ({id}) =>{ //※１　動画IDをもらう

    const [isThumbnail, setIsThumbnail] = useState(true); //※２　useStateでisThumbnailを管理

    return (
        <div className={styles.youtubewrapper}>
            {isThumbnail ? ( //※３　三項演算子。isThumbnailがtrueなら、サムネを取得して表示
                
                <img className={styles.youtube}
                    src={`/images/maxresdefault.webp`} //※４　↓で解説
                    onClick={() => setIsThumbnail(false)} //※５　クリックされたらsetIsThumbnailでisThumbnailをfalseに変更
                    alt="サムネイル"
                />
                
                
            ) : ( //※３　三項演算子。isThumbnailがfalseなら（=サムネがクリックされたら）iframeでYoutubeを読み込む
            <iframe className={styles.youtube}
                src={`https://www.youtube.com/embed/temP7huz9HA?autoplay=1`} //※６　受け取った動画IDを元にYoutubeを指定
                title="YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            )}
        </div>
    );
}

export default EmbedYoutube