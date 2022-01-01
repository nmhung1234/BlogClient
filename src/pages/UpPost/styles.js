import styled from "styled-components";

export const UpPostStyles = styled.div`
.nav-uppost {
    /* @include flexbox("space-evenly", "center"); */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.uppost {
    width: 100%;
    .write-container {
        width: 90%;
        max-width: 1000px;
        margin: 0 auto;
        .write-space {
            margin-top: 30px;
            padding: 30px 50px;
            .editCover{
                /* @include flexbox("flex-start", "center"); */
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .cover-img img{
                    margin-right: 30px;
                    height: 100px;
                    width: 200px;
                    border-radius:10px;
                }
                .remove-cover{
                    background-color: red !important;
                }
            }
            /* @include flexbox("center", "flex-start"); */
            display: flex;
            justify-content: center;
            align-items: flex-start;

            .title-post {
                border: none;
                outline: none;
                padding: 20px;
                font-size: 50px;
                width: 100%;
                font-weight: bold;
                resize: none;
                overflow: hidden;
                color: var(--text-default);
                background-color: var(--color-background-1)
            }
            .makeLinkImg {
                width: 100%;
                padding: 20px 0;
                padding-left: 20px;
                background-color: var(--color-background-2);
                height: fit-content;
                .input {
                    padding-left: 20px;
                    width: 60%;
                    background-color: var(--color-background-3);
                }
                .copy {
                    /* @include flexbox("null", "center"); */
                    display: flex;
                    align-items: center;
                }
            }
            .content-post {
                width: 100%;
                border: none;
                outline: none;
                font-size: 20px;
                resize: none;
            }
        }
        
        .uppost-btn{
            user-select: none;
                ${props => {
                if (props.upPostStatus) {
                    return `
                        filter: grayscale(1);
                        cursor: not-allowed;
                        `
                    }
                }}
            }
    }
    .editor {
        min-width: 100% !important;
        height: fit-content !important;
        background-color: var(--color-background-1);
    }
}

.previewpost {
    text-align: left;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 20px;
}
/* for markdown editor */

.w-md-editor {
    box-shadow: none !important;
}
.w-md-editor-show-edit {
    min-height: 200px;
    height: fit-content !important;
}
.w-md-editor-content {
    height: fit-content !important;
}
.w-md-editor-aree {
    overflow: unset !important;
}
.w-md-editor-text {
    font-size: 20px !important;
    line-height: 30px !important;
    overflow: unset !important;
    height: fit-content !important;
}
.language-markdown{
    color: var(--text-default) !important;
}

`