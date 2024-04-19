"use strict";(self.webpackChunk_hankliu_rc_monaco_editor=self.webpackChunk_hankliu_rc_monaco_editor||[]).push([[2433],{8183:function(j,i,e){e.r(i),e.d(i,{default:function(){return k}});var g=e(15427),C=e.n(g),_=e(76531),E=e.n(_),m=e(37432),O=e.n(m),d=e(13226),y=e.n(d),o=e(91814),M=e.n(o),v=e(63430),A=e.n(v),D=e(37047),Ke=e.n(D),Re=e(61456),L=e.n(Re),Oe=e(22325),Me=e.n(Oe),ke=e(69399),S=e.n(ke),Pe=e(93397),Ve=e.n(Pe),Ie=e(91228),W=e.n(Ie),Se=e(84915),Fe=e.n(Se),de=e(32027),p=e.n(de),F=e(92035),z=e.n(F),ce=e(19596),ee=e.n(ce),Te=e(64599),xe=e.n(Te),Ne=e(15009),Ae=e.n(Ne),We=e(60579),$e=e.n(We),Ue=e(35138),_e=e.n(Ue),me=e(99289),Be=e.n(me),we=e(5574),t=e.n(we),r=e(31081),a=e(67294),h=e(67939),n=e(85893),b={html:`<h1>Turndown Demo</h1>

  <p>This demonstrates <a href="https://github.com/mixmark-io/turndown">turndown</a> \u2013 an HTML to Markdown converter in JavaScript.</p>

  <h2>Usage</h2>

  <pre><code class="language-js">var turndownService = new TurndownService()
  console.log(
    turndownService.turndown('&lt;h1&gt;Hello world&lt;/h1&gt;')
  )</code></pre>

  <hr />

  <p>It aims to be <a href="http://commonmark.org/">CommonMark</a>
   compliant, and includes options to style the output. These options include:</p>

  <ul>
    <li>headingStyle (setext or atx)</li>
    <li>horizontalRule (*, -, or _)</li>
    <li>bullet (*, -, or +)</li>
    <li>codeBlockStyle (indented or fenced)</li>
    <li>fence (~ or ~)</li>
    <li>emDelimiter (_ or *)</li>
    <li>strongDelimiter (** or __)</li>
    <li>linkStyle (inlined or referenced)</li>
    <li>linkReferenceStyle (full, collapsed, or shortcut)</li>
  </ul>
  `,javascript:`(function(w){
    var rest = {};
    rest.methods = ['get', 'post', 'put', 'del'];
    rest.offline = true;
    rest.before = function(params) {
        //TODO
        console.log('sentData', params);
    };

    rest.after = function(params) {
        //TODO
        console.log('gotData', params);
    };

    if (rest.offline) {
        rest.get = function(url, data, okCallback, failCallback) {
            rest.before(arguments);
            if ('function' === typeof(data)) {
                failCallback = okCallback;
                okCallback = data;
                data = {};
            }
            $.getJSON(url, data, function(data, textStatus, jqXHR){
                okCallback(data, textStatus, jqXHR);
                rest.after(data, textStatus, jqXHR);
            });
        };
        rest.post = rest.put = rest.del = rest.get;
    } else {
        var len =  rest.methods.length;
        for (var i = 0; i < len; i++) {
            (function(){
                var methodName = rest.methods[i];
                rest[methodName] = function(url, data, okCallback, failCallback) {
                    if ('function' === typeof(data)) {
                        failCallback = okCallback;
                        okCallback = data;
                        data = {};
                    }
                    ('del' === methodName) && (methodName = 'delete');
                    if (!failCallback) {
                        failCallback = function(jqXHR, textStatus, errorThrown) {
                            console.error(jqXHR, textStatus, errorThrown);
                        };
                    }
                    rest.before(arguments);
                    $.ajax({
                        dataType: 'json',
                        type: methodName,
                        url: url,
                        data: data,
                        success: okCallback,
                        fail: failCallback,
                        complete: rest.after
                    });
                };
            })();
        }
    }

    if ( typeof define === "function") {
        if (define.amd || define.cmd) {
            define('rest', [], function() {
                return rest;
            });
        }
    } else {
        w.rest = rest;
    }
  })(window);
  `,scss:`// variables
  $primary-color: #007bff;
  $secondary-color: #6c757d;
  $border-radius: 5px;

  // mixins
  @mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // main styles
  body {
    font-family: Arial, sans-serif;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .header {
    background-color: $primary-color;
    color: white;
    padding: 10px;
  }

  .footer {
    background-color: $secondary-color;
    color: white;
    padding: 10px;
  }

  .button {
    background-color: $primary-color;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: $border-radius;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: darken($primary-color, 10%);
    }
  }

  .card {
    background-color: white;
    border-radius: $border-radius;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  `,markdown:`# Turndown Demo

  This demonstrates [turndown](https://github.com/mixmark-io/turndown) \u2013 an HTML to Markdown converter in JavaScript.

  ## Usage

  \`\`\`js
  var turndownService = new TurndownService()
    console.log(
      turndownService.turndown('<h1>Hello world</h1>')
    )
  \`\`\`

  * * *

  It aims to be [CommonMark](http://commonmark.org/) compliant, and includes options to style the output. These options include:

  -   headingStyle (setext or atx)
  -   horizontalRule (*, -, or _)
  -   bullet (*, -, or +)
  -   codeBlockStyle (indented or fenced)
  -   fence (~ or ~)
  -   emDelimiter (_ or *)
  -   strongDelimiter (** or __)
  -   linkStyle (inlined or referenced)
  -   linkReferenceStyle (full, collapsed, or shortcut)
  `,python:`# encoding:utf-8
  import requests
  import base64
  import cv2
  import numpy as np
  from PIL import Image

  source_folder = 'D:\\Workspace\\personal\\python\\small-tools\\images\\source'
  temp_folder = 'D:\\Workspace\\personal\\python\\small-tools\\images\\temp'
  dist_folder = 'D:\\Workspace\\personal\\python\\small-tools\\images\\dist'
  image_name = 'avatar.png'

  def fetch_access_token(client_key, client_secret):
    # client_id \u4E3A\u5B98\u7F51\u83B7\u53D6\u7684AK\uFF0C client_secret \u4E3A\u5B98\u7F51\u83B7\u53D6\u7684SK
    url = 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=%s&client_secret=%s'%(client_key, client_secret)
    response = requests.get(url)
    if response:
      return response.json().get('access_token')

  def portrait_split(access_token):
    url = 'https://aip.baidubce.com/rest/2.0/image-classify/v1/body_seg?access_token=%s' % access_token
    # \u4E8C\u8FDB\u5236\u65B9\u5F0F\u6253\u5F00\u56FE\u7247\u6587\u4EF6
    f = open('%s\\%s' % (source_folder, image_name), 'rb')
    img = base64.b64encode(f.read())

    params = {'image': img}
    headers = {'content-type': 'application/x-www-form-urlencoded'}
    response = requests.post(url, data=params, headers=headers)

    return response.json()

  def download_labelmap_image(labelmap):
    labelmap = base64.b64decode(labelmap)
    nparr = np.frombuffer(labelmap, np.uint8)
    label_img = cv2.imdecode(nparr, 1)
    # width, height\u4E3A\u56FE\u7247\u539F\u59CB\u5BBD\u3001\u9AD8
    width = label_img.shape[1]
    height = label_img.shape[0]
    label_img = cv2.resize(label_img, (width, height), interpolation=cv2.INTER_NEAREST)
    im_new = np.where(label_img == 1, 255, label_img)
    cv2.imwrite('%s\\label_%s' % (temp_folder, image_name), im_new)

  def download_foreimage(foreground):
    foreimage_url = '%s\\foreground_%s' % (temp_folder, image_name)
    with open(foreimage_url, 'wb') as f:
      f.write(base64.b64decode(foreground))

  def download_scoremap_image(scoremap):
    image_score_url = '%s\\score_%s' % (temp_folder, image_name)
    with open(image_score_url, 'wb') as f:
      f.write(base64.b64decode(scoremap))

  def combine_image(foreimage, baseimage, rate):
    baseimage_pillow = Image.open(baseimage)
    base_width, base_height = baseimage_pillow.size

    foreimage_pillow = Image.open(foreimage)
    fore_width, fore_height = foreimage_pillow.size

    # \u5C06\u524D\u666F\u5B89\u88C5\u6307\u5B9A\u7684\u6BD4\u4F8B\u8FDB\u884C\u7F29\u653E\u4EE5\u9002\u5E94\u80CC\u666F\u5927\u5C0F
    foreimage_pillow = foreimage_pillow.resize((int(fore_width * rate), int(fore_height * rate)))
    fore_width, fore_height = foreimage_pillow.size

    # \u5206\u79BB\u901A\u9053
    r, g, b, a = foreimage_pillow.split()
    box = (int(base_width / 2 - fore_width / 2), base_height - fore_height,
            int(base_width / 2 + fore_width / 2), base_height)

    # \u5C06\u524D\u666F\u7C98\u8D34\u5230\u80CC\u666F\u4E2D
    baseimage_pillow.paste(foreimage_pillow, box, mask=a)

    # \u8FD4\u56DE\u7C98\u8D34\u5408\u6210\u597D\u7684\u7167\u7247
    return baseimage_pillow


  if __name__ == "__main__":
    access_token = fetch_access_token('XCq******hl8Yh****CQ4Na5', 'Qjnecnab*********5ZO78G****4beBE')
    res = portrait_split(access_token)

    download_scoremap_image(res.get('scoremap'))

    download_foreimage(res.get('foreground'))

    download_labelmap_image(res.get('labelmap'))

    baseimage_url = '%s\\bg.jpg' % source_folder
    foreimage_url = '%s\\foreground_%s' % (temp_folder, image_name)
    combined_image_url = '%s\\combined_%s' % (dist_folder, image_name)
    combine_image(foreimage_url, baseimage_url, 10).save(combined_image_url)
  `,sql:`SELECT start_time, COUNT(DISTINCT lesson_uid) AS count FROM (SELECT FROM_UNIXTIME(s.start_time / 1000, '%Y-%m-%d') AS start_time, s.lesson_uid AS lesson_uid FROM \`audio_xx_tickets_summary\` s JOIN \`audio_xx_tickets_detail\` d ON d.ticket_id = s.ticket_id WHERE s.start_time BETWEEN 1561939200000 AND 1562630399000 AND s.ticket_bu = 2 AND d.message_page LIKE '%\u6742\u97F3%') temp1 GROUP BY start_time ORDER BY start_time DESC

  SELECT start_time, COUNT(DISTINCT lesson_uid) AS count FROM (SELECT FROM_UNIXTIME(s.start_time / 1000, '%Y-%m-%d') AS start_time, s.lesson_uid AS lesson_uid FROM \`audio_xx_tickets_summary\` s JOIN \`audio_xx_tickets_detail\` d ON d.ticket_id = s.ticket_id WHERE s.start_time BETWEEN 1561939200000 AND 1562630399000 AND s.ticket_bu = 2 AND d.message_page LIKE '%\u56DE\u97F3%') temp1 GROUP BY start_time ORDER BY start_time DESC

  SELECT start_time, COUNT(DISTINCT lesson_uid) AS count FROM (SELECT FROM_UNIXTIME(s.start_time / 1000, '%Y-%m-%d') AS start_time, s.lesson_uid AS lesson_uid FROM \`audio_xx_tickets_summary\` s JOIN \`audio_xx_tickets_detail\` d ON d.ticket_id = s.ticket_id WHERE s.start_time BETWEEN 1561939200000 AND 1562630399000 AND s.ticket_bu = 2) temp1 GROUP BY start_time ORDER BY start_time DESC

  SELECT
    i.stat_date AS "time",
    ROUND(COUNT(i.id) / temp2.total * 100, 2) AS "value",
    IF(i.audio_name='','Unknown',i.audio_name) AS "metric"
  FROM \`tb_avs_xx_day_ticket_info\` i
  LEFT JOIN (
    SELECT
      stat_date,
      COUNT(id) AS total
    FROM \`tb_avs_xx_day_ticket_info\`
    GROUP BY stat_date
  ) temp2
  ON i.stat_date = temp2.stat_date
  WHERE
    i.audio_name IN (
      SELECT
        audio_name
      FROM (
        SELECT
          COUNT(id) AS count,
          audio_name
        FROM \`tb_avs_xx_day_ticket_info\`
        GROUP BY audio_name
        ORDER BY count DESC
        LIMIT 0, 20
      ) temp1
    )
  GROUP BY i.stat_date, i.audio_name
  ORDER BY i.stat_date DESC
  `,typescript:`/* eslint-disable no-restricted-globals */
  /* eslint-disable no-case-declarations */
  /* eslint-disable no-use-before-define */
  /* eslint-disable no-plusplus */
  /* eslint-disable no-param-reassign */
  import defaults from "lodash/defaults";
  import groupBy from "lodash/groupBy";
  import MyWorker from "worker-loader!./parser.worker.ts";

  import {
    ICompletionItem,
    ICursorInfo,
    ITableInfo,
    reader,
  } from "../sql-parser";
  import { IParseResult } from "../syntax-parser";
  import { DefaultOpts, IMonacoVersion, IParserType } from "./default-opts";

  const supportedMirrorEditorVersion = ["0.13.2", "0.15.6"];

  export function monacoSqlAutocomplete(
    monaco: any,
    editor: any,
    opts?: Partial<DefaultOpts>
  ) {
    opts = defaults(opts || {}, new DefaultOpts(monaco));

    // eslint-disable-next-line unicorn/prefer-includes
    if (supportedMirrorEditorVersion.indexOf(opts.MirrorEditorVersion) === -1) {
      throw new Error(
        \`monaco-editor version \${
          opts.MirrorEditorVersion
        } is not allowed, only support \${supportedMirrorEditorVersion.join(" ")}\`
      );
    }

    // Get parser info and show error.
    let currentParserPromise: any = null;
    let editVersion = 0;

    editor.onDidChangeModelContent((event: any) => {
      editVersion++;
      const currentEditVersion = editVersion;

      currentParserPromise = new Promise((resolve) => {
        setTimeout(() => {
          const model = editor.getModel();

          // eslint-disable-next-line promise/catch-or-return
          asyncParser(
            editor.getValue(),
            model.getOffsetAt(editor.getPosition()),
            opts.parserType
          ).then((parseResult) => {
            resolve(parseResult);

            if (currentEditVersion !== editVersion) {
              return;
            }

            opts.onParse(parseResult);

            if (parseResult.error) {
              const newReason =
                parseResult.error.reason === "incomplete"
                  ? \`Incomplete, expect next input: 
\${parseResult.error.suggestions
                      .map((each) => {
                        return each.value;
                      })
                      .join("
")}\`
                  : \`Wrong input, expect: 
\${parseResult.error.suggestions
                      .map((each) => {
                        return each.value;
                      })
                      .join("
")}\`;

              const errorPosition = parseResult.error.token
                ? {
                    startLineNumber: model.getPositionAt(
                      parseResult.error.token.position[0]
                    ).lineNumber,
                    startColumn: model.getPositionAt(
                      parseResult.error.token.position[0]
                    ).column,
                    endLineNumber: model.getPositionAt(
                      parseResult.error.token.position[1]
                    ).lineNumber,
                    endColumn:
                      model.getPositionAt(parseResult.error.token.position[1])
                        .column + 1,
                  }
                : {
                    startLineNumber: 0,
                    startColumn: 0,
                    endLineNumber: 0,
                    endColumn: 0,
                  };

              model.getPositionAt(parseResult.error.token);

              monaco.editor.setModelMarkers(model, opts.language, [
                {
                  ...errorPosition,
                  message: newReason,
                  severity: getSeverityByVersion(
                    monaco,
                    opts.MirrorEditorVersion
                  ),
                },
              ]);
            } else {
              monaco.editor.setModelMarkers(editor.getModel(), opts.language, []);
            }
          });
        });
      });
    });

    monaco.languages.registerCompletionItemProvider(opts.language, {
      triggerCharacters:
        // eslint-disable-next-line unicorn/prefer-spread
        " $.:{}=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      provideCompletionItems: async () => {
        const currentEditVersion = editVersion;
        const parseResult: IParseResult = await currentParserPromise;

        if (currentEditVersion !== editVersion) {
          return returnCompletionItemsByVersion([], opts.MirrorEditorVersion);
        }

        const cursorInfo = await reader.getCursorInfo(
          parseResult.ast,
          parseResult.cursorKeyPath
        );

        const parserSuggestion = opts.pipeKeywords(parseResult.nextMatchings);

        if (!cursorInfo) {
          return returnCompletionItemsByVersion(
            parserSuggestion,
            opts.MirrorEditorVersion
          );
        }

        switch (cursorInfo.type) {
          case "tableField": {
            const cursorRootStatementFields = await reader.getFieldsFromStatement(
              parseResult.ast,
              parseResult.cursorKeyPath,
              opts.onSuggestTableFields
            );

            // group.fieldName
            const groups = groupBy(
              cursorRootStatementFields.filter((cursorRootStatementField) => {
                return cursorRootStatementField.groupPickerName !== null;
              }),
              "groupPickerName"
            );

            const functionNames = await opts.onSuggestFunctionName(
              cursorInfo.token.value
            );

            return returnCompletionItemsByVersion(
              [
                ...cursorRootStatementFields,
                ...parserSuggestion,
                ...functionNames,
                ...(groups
                  ? Object.keys(groups).map((groupName) => {
                      return opts.onSuggestFieldGroup(groupName);
                    })
                  : []),
              ],
              opts.MirrorEditorVersion
            );
          }
          case "tableFieldAfterGroup": {
            // \u5B57\u6BB5 . \u540E\u9762\u7684\u90E8\u5206
            const cursorRootStatementFieldsAfter =
              await reader.getFieldsFromStatement(
                parseResult.ast,
                parseResult.cursorKeyPath as any,
                opts.onSuggestTableFields
              );

            return returnCompletionItemsByVersion(
              [
                ...cursorRootStatementFieldsAfter.filter(
                  (cursorRootStatementField: any) => {
                    return (
                      cursorRootStatementField.groupPickerName ===
                      (cursorInfo as ICursorInfo<{ groupName: string }>).groupName
                    );
                  }
                ),
                ...parserSuggestion,
              ],
              opts.MirrorEditorVersion
            );
          }
          case "tableName": {
            const tableNames = await opts.onSuggestTableNames(
              cursorInfo as ICursorInfo<ITableInfo>
            );

            return returnCompletionItemsByVersion(
              [...tableNames, ...parserSuggestion],
              opts.MirrorEditorVersion
            );
          }
          case "functionName": {
            return opts.onSuggestFunctionName(cursorInfo.token.value);
          }
          default: {
            return returnCompletionItemsByVersion(
              parserSuggestion,
              opts.MirrorEditorVersion
            );
          }
        }
      },
    });

    monaco.languages.registerHoverProvider(opts.language, {
      provideHover: async (model: any, position: any) => {
        const parseResult: IParseResult = await asyncParser(
          editor.getValue(),
          model.getOffsetAt(position),
          opts.parserType
        );

        const cursorInfo = await reader.getCursorInfo(
          parseResult.ast,
          parseResult.cursorKeyPath
        );

        if (!cursorInfo) {
          return null as any;
        }

        let contents: any = [];

        switch (cursorInfo.type) {
          case "tableField": {
            const extra = await reader.findFieldExtraInfo(
              parseResult.ast,
              cursorInfo,
              opts.onSuggestTableFields,
              parseResult.cursorKeyPath
            );
            contents = await opts.onHoverTableField(
              cursorInfo.token.value,
              extra
            );
            break;
          }
          case "tableFieldAfterGroup": {
            const extraAfter = await reader.findFieldExtraInfo(
              parseResult.ast,
              cursorInfo,
              opts.onSuggestTableFields,
              parseResult.cursorKeyPath
            );
            contents = await opts.onHoverTableField(
              cursorInfo.token.value,
              extraAfter
            );
            break;
          }
          case "tableName": {
            contents = await opts.onHoverTableName(cursorInfo as ICursorInfo);
            break;
          }
          case "functionName": {
            contents = await opts.onHoverFunctionName(cursorInfo.token.value);
            break;
          }
          default:
        }

        return {
          range: monaco.Range.fromPositions(
            model.getPositionAt(cursorInfo.token.position[0]),
            model.getPositionAt(cursorInfo.token.position[1] + 1)
          ),
          contents,
        };
      },
    });
  }

  // \u5B9E\u4F8B\u5316\u4E00\u4E2A worker
  const worker: Worker = new (MyWorker as any)();

  let parserIndex = 0;

  const asyncParser = async (
    text: string,
    index: number,
    parserType: IParserType
  ) => {
    parserIndex++;
    const currentParserIndex = parserIndex;

    let resolve: any = null;
    let reject: any = null;

    // eslint-disable-next-line promise/param-names
    const promise = new Promise((promiseResolve, promiseReject) => {
      resolve = promiseResolve;
      reject = promiseReject;
    });

    worker.postMessage({ text, index, parserType });

    // eslint-disable-next-line unicorn/prefer-add-event-listener
    worker.onmessage = (event) => {
      if (currentParserIndex === parserIndex) {
        resolve(event.data);
      } else {
        reject();
      }
    };

    return promise as Promise<IParseResult>;
  };

  function returnCompletionItemsByVersion(
    value: ICompletionItem[],
    monacoVersion: IMonacoVersion
  ) {
    switch (monacoVersion) {
      case "0.13.2": {
        return value;
      }
      case "0.15.6": {
        return {
          suggestions: value,
        };
      }
      default: {
        throw new Error("Not supported version");
      }
    }
  }

  function getSeverityByVersion(monaco: any, monacoVersion: IMonacoVersion) {
    switch (monacoVersion) {
      case "0.13.2": {
        return monaco.Severity.Error;
      }
      case "0.15.6": {
        return monaco.MarkerSeverity.Error;
      }
      default: {
        throw new Error("Not supported version");
      }
    }
  }
  `,yaml:`name: CI

  on:
    push:
      branches:
        - main

  jobs:
    build:
      runs-on: ubuntu-latest

      steps:
        - name: Checkout repository
          uses: actions/checkout@v2

        - name: Install dependencies
          run: npm install

        - name: Build project
          run: npm run build

        - name: Run tests
          run: npm test`},R=[r.EMonacoEditorTheme.VS,r.EMonacoEditorTheme.VSDark,r.EMonacoEditorTheme.HCLight,r.EMonacoEditorTheme.HCBlack],I=["100%","200px","300px","500px"];function k(){var X=a.useState(b.html),U=t()(X,2),B=U[0],K=U[1],T=a.useState("html"),ne=t()(T,2),H=ne[0],J=ne[1],pe=a.useState(r.EMonacoEditorTheme.VSDark),Q=t()(pe,2),te=Q[0],re=Q[1],fe=a.useState("500px"),Z=t()(fe,2),oe=Z[0],ae=Z[1],ge=a.useState(!0),V=t()(ge,2),se=V[0],je=V[1],he=a.useState(!0),Ee=t()(he,2),ie=Ee[0],Le=Ee[1],ve=a.useState(!0),be=t()(ve,2),le=be[0],Ce=be[1],ye=a.useState(!0),ue=t()(ye,2),Y=ue[0],s=ue[1],w=a.useRef(null),G=a.useCallback(function(){var l=Be()(Ae()().mark(function u($){var N,c,f,x;return Ae()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:if(!w.current){P.next=13;break}return P.next=3,w.current.format($||B,H);case 3:if(N=P.sent,c=N.canceled,f=N.error,x=N.pretty,!f){P.next=10;break}return _e().error(f.message),P.abrupt("return");case 10:if(!c){P.next=12;break}return P.abrupt("return");case 12:K(x);case 13:case"end":return P.stop()}},u)}));return function(u){return l.apply(this,arguments)}}(),[B,H]),De=function(u){var $=document.querySelector("html"),N=new MutationObserver(function(c){var f=xe()(c),x;try{for(f.s();!(x=f.n()).done;){var q=x.value;q.type==="attributes"&&(($==null?void 0:$.getAttribute("data-prefers-color"))==="dark"?u("dark"):u("light"))}}catch(P){f.e(P)}finally{f.f()}});return N.observe($,{attributes:!0}),function(){N.disconnect()}};return(0,n.jsxs)(E(),{locale:h.default,children:[(0,n.jsx)(r.default,{ref:w,height:oe,value:B,language:H,readOnly:!se,highlightWhitespace:ie,highlightActiveLine:le,formatOnSave:Y,onChange:function(u){K(u)},getWebAppTheme:function(){var u;return((u=document.querySelector("html"))===null||u===void 0?void 0:u.getAttribute("data-prefers-color"))==="dark"?"dark":"light"},onWebAppThemeChange:De,theme:te}),(0,n.jsx)(ee(),{}),(0,n.jsxs)(S(),{gutter:16,children:[(0,n.jsx)(p(),{span:8,children:(0,n.jsxs)(S(),{align:"middle",children:[(0,n.jsx)(p(),{flex:"80px",children:"\u8BED\u8A00:"}),(0,n.jsx)(p(),{flex:"1",children:(0,n.jsx)(W(),{value:H,style:{width:"100%"},onChange:function(u){K(b[u]||""),J(u)},showSearch:!0,children:r.Languages.sort().map(function(l){return(0,n.jsx)(W().Option,{value:l,children:l},l)})})})]})}),(0,n.jsx)(p(),{span:8,children:(0,n.jsxs)(S(),{align:"middle",children:[(0,n.jsx)(p(),{flex:"80px",children:"\u4E3B\u9898:"}),(0,n.jsx)(p(),{flex:"1",children:(0,n.jsx)(W(),{value:te,style:{width:"100%"},onChange:function(u){re(u)},showSearch:!0,allowClear:!0,children:R.map(function(l){return(0,n.jsx)(W().Option,{value:l,children:l},l)})})})]})}),(0,n.jsx)(p(),{span:8,children:(0,n.jsxs)(S(),{align:"middle",children:[(0,n.jsx)(p(),{flex:"80px",children:"\u9AD8\u5EA6:"}),(0,n.jsx)(p(),{flex:"1",children:(0,n.jsx)(W(),{value:oe,style:{width:"100%"},onChange:function(u){ae(u)},showSearch:!0,children:I.map(function(l){return(0,n.jsx)(W().Option,{value:l,children:l},l)})})})]})})]}),(0,n.jsxs)(S(),{gutter:16,style:{marginTop:"16px"},children:[(0,n.jsx)(p(),{span:8,children:(0,n.jsxs)(S(),{align:"middle",children:[(0,n.jsx)(p(),{flex:"80px",children:"\u53EF\u7F16\u8F91:"}),(0,n.jsx)(p(),{flex:"1",children:(0,n.jsx)(L(),{checked:se,onChange:function(u){je(u.target.checked)},children:"\u662F\u5426\u53EF\u7F16\u8F91"})})]})}),(0,n.jsx)(p(),{span:8,children:(0,n.jsxs)(S(),{align:"middle",children:[(0,n.jsx)(p(),{flex:"80px",children:"\u9AD8\u4EAE\u7A7A\u683C:"}),(0,n.jsx)(p(),{flex:"1",children:(0,n.jsx)(L(),{checked:ie,onChange:function(u){Le(u.target.checked)},children:"\u662F\u5426\u9AD8\u4EAE"})})]})}),(0,n.jsx)(p(),{span:8,children:(0,n.jsxs)(S(),{align:"middle",children:[(0,n.jsx)(p(),{flex:"80px",children:"\u9AD8\u4EAE\u5F53\u524D\u884C:"}),(0,n.jsx)(p(),{flex:"1",children:(0,n.jsx)(L(),{checked:le,onChange:function(u){Ce(u.target.checked)},children:"\u662F\u5426\u9AD8\u4EAE"})})]})})]}),(0,n.jsxs)(S(),{gutter:16,style:{marginTop:"16px"},children:[(0,n.jsx)(p(),{span:8,children:(0,n.jsxs)(S(),{align:"middle",children:[(0,n.jsx)(p(),{flex:"80px",children:"\u81EA\u52A8\u683C\u5F0F\u5316:"}),(0,n.jsx)(p(),{flex:"1",children:(0,n.jsx)(L(),{checked:Y,onChange:function(u){s(u.target.checked)},children:"\u4FDD\u5B58\u662F\u5426\u81EA\u52A8\u683C\u5F0F\u5316"})})]})}),(0,n.jsx)(p(),{span:8,children:(0,n.jsxs)(y(),{size:16,children:[(0,n.jsx)(A(),{onClick:function(){K("")},children:"\u6E05\u7A7A\u5185\u5BB9"}),(0,n.jsx)(A(),{onClick:function(){G()},children:"\u683C\u5F0F\u5316"})]})})]})]})}},86478:function(j,i,e){e.r(i),e.d(i,{default:function(){return d}});var g=e(5574),C=e.n(g),_=e(31081),E=e(67294),m=e(85893),O=`(function(w){
  var rest = {};
  rest.methods = ['get', 'post', 'put', 'del'];
  rest.offline = true;
  rest.before = function(params) {
      //TODO
      console.log('sentData', params);
  };

  rest.after = function(params) {
      //TODO
      console.log('gotData', params);
  };

  if (rest.offline) {
      rest.get = function(url, data, okCallback, failCallback) {
          rest.before(arguments);
          if ('function' === typeof(data)) {
              failCallback = okCallback;
              okCallback = data;
              data = {};
          }
          $.getJSON(url, data, function(data, textStatus, jqXHR){
              okCallback(data, textStatus, jqXHR);
              rest.after(data, textStatus, jqXHR);
          });
      };
      rest.post = rest.put = rest.del = rest.get;
  } else {
      var len =  rest.methods.length;
      for (var i = 0; i < len; i++) {
          (function(){
              var methodName = rest.methods[i];
              rest[methodName] = function(url, data, okCallback, failCallback) {
                  if ('function' === typeof(data)) {
                      failCallback = okCallback;
                      okCallback = data;
                      data = {};
                  }
                  ('del' === methodName) && (methodName = 'delete');
                  if (!failCallback) {
                      failCallback = function(jqXHR, textStatus, errorThrown) {
                          console.error(jqXHR, textStatus, errorThrown);
                      };
                  }
                  rest.before(arguments);
                  $.ajax({
                      dataType: 'json',
                      type: methodName,
                      url: url,
                      data: data,
                      success: okCallback,
                      fail: failCallback,
                      complete: rest.after
                  });
              };
          })();
      }
  }

  if ( typeof define === "function") {
      if (define.amd || define.cmd) {
          define('rest', [], function() {
              return rest;
          });
      }
  } else {
      w.rest = rest;
  }
})(window);
`;function d(){var y=E.useState(O),o=C()(y,2),M=o[0],v=o[1];return(0,m.jsx)("div",{style:{backgroundColor:"#000",padding:"20px",borderRadius:"4px"},children:(0,m.jsx)(_.default,{height:400,value:M,language:"javascript",onChange:function(D){v(D)},theme:_.EMonacoEditorTheme.HCLight})})}},87867:function(j,i,e){e.r(i),e.d(i,{default:function(){return d}});var g=e(5574),C=e.n(g),_=e(31081),E=e(67294),m=e(85893),O=`# Turndown Demo

This demonstrates [turndown](https://github.com/mixmark-io/turndown) \u2013 an HTML to Markdown converter in JavaScript.

## Usage

\`\`\`js
var turndownService = new TurndownService()
  console.log(
    turndownService.turndown('<h1>Hello world</h1>')
  )
\`\`\`

* * *

It aims to be [CommonMark](http://commonmark.org/) compliant, and includes options to style the output. These options include:

-   headingStyle (setext or atx)
-   horizontalRule (*, -, or _)
-   bullet (*, -, or +)
-   codeBlockStyle (indented or fenced)
-   fence (~ or ~)
-   emDelimiter (_ or *)
-   strongDelimiter (** or __)
-   linkStyle (inlined or referenced)
-   linkReferenceStyle (full, collapsed, or shortcut)
`;function d(){var y=E.useState(O),o=C()(y,2),M=o[0],v=o[1];return(0,m.jsx)("div",{children:(0,m.jsx)(_.default,{height:400,value:M,language:"markdown",onChange:function(D){v(D)},theme:_.EMonacoEditorTheme.VS})})}},42910:function(j,i,e){e.r(i),e.d(i,{default:function(){return d}});var g=e(5574),C=e.n(g),_=e(31081),E=e(67294),m=e(85893),O=`# encoding:utf-8
import requests
import base64
import cv2
import numpy as np
from PIL import Image

source_folder = 'D:\\Workspace\\personal\\python\\small-tools\\images\\source'
temp_folder = 'D:\\Workspace\\personal\\python\\small-tools\\images\\temp'
dist_folder = 'D:\\Workspace\\personal\\python\\small-tools\\images\\dist'
image_name = 'avatar.png'

def fetch_access_token(client_key, client_secret):
  # client_id \u4E3A\u5B98\u7F51\u83B7\u53D6\u7684AK\uFF0C client_secret \u4E3A\u5B98\u7F51\u83B7\u53D6\u7684SK
  url = 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=%s&client_secret=%s'%(client_key, client_secret)
  response = requests.get(url)
  if response:
    return response.json().get('access_token')

def portrait_split(access_token):
  url = 'https://aip.baidubce.com/rest/2.0/image-classify/v1/body_seg?access_token=%s' % access_token
  # \u4E8C\u8FDB\u5236\u65B9\u5F0F\u6253\u5F00\u56FE\u7247\u6587\u4EF6
  f = open('%s\\%s' % (source_folder, image_name), 'rb')
  img = base64.b64encode(f.read())

  params = {'image': img}
  headers = {'content-type': 'application/x-www-form-urlencoded'}
  response = requests.post(url, data=params, headers=headers)

  return response.json()

def download_labelmap_image(labelmap):
  labelmap = base64.b64decode(labelmap)
  nparr = np.frombuffer(labelmap, np.uint8)
  label_img = cv2.imdecode(nparr, 1)
  # width, height\u4E3A\u56FE\u7247\u539F\u59CB\u5BBD\u3001\u9AD8
  width = label_img.shape[1]
  height = label_img.shape[0]
  label_img = cv2.resize(label_img, (width, height), interpolation=cv2.INTER_NEAREST)
  im_new = np.where(label_img == 1, 255, label_img)
  cv2.imwrite('%s\\label_%s' % (temp_folder, image_name), im_new)

def download_foreimage(foreground):
  foreimage_url = '%s\\foreground_%s' % (temp_folder, image_name)
  with open(foreimage_url, 'wb') as f:
    f.write(base64.b64decode(foreground))

def download_scoremap_image(scoremap):
  image_score_url = '%s\\score_%s' % (temp_folder, image_name)
  with open(image_score_url, 'wb') as f:
    f.write(base64.b64decode(scoremap))

def combine_image(foreimage, baseimage, rate):
  baseimage_pillow = Image.open(baseimage)
  base_width, base_height = baseimage_pillow.size

  foreimage_pillow = Image.open(foreimage)
  fore_width, fore_height = foreimage_pillow.size

  # \u5C06\u524D\u666F\u5B89\u88C5\u6307\u5B9A\u7684\u6BD4\u4F8B\u8FDB\u884C\u7F29\u653E\u4EE5\u9002\u5E94\u80CC\u666F\u5927\u5C0F
  foreimage_pillow = foreimage_pillow.resize((int(fore_width * rate), int(fore_height * rate)))
  fore_width, fore_height = foreimage_pillow.size

  # \u5206\u79BB\u901A\u9053
  r, g, b, a = foreimage_pillow.split()
  box = (int(base_width / 2 - fore_width / 2), base_height - fore_height,
          int(base_width / 2 + fore_width / 2), base_height)

  # \u5C06\u524D\u666F\u7C98\u8D34\u5230\u80CC\u666F\u4E2D
  baseimage_pillow.paste(foreimage_pillow, box, mask=a)

  # \u8FD4\u56DE\u7C98\u8D34\u5408\u6210\u597D\u7684\u7167\u7247
  return baseimage_pillow


if __name__ == "__main__":
  access_token = fetch_access_token('XCq******hl8Yh****CQ4Na5', 'Qjnecnab*********5ZO78G****4beBE')
  res = portrait_split(access_token)

  download_scoremap_image(res.get('scoremap'))

  download_foreimage(res.get('foreground'))

  download_labelmap_image(res.get('labelmap'))

  baseimage_url = '%s\\bg.jpg' % source_folder
  foreimage_url = '%s\\foreground_%s' % (temp_folder, image_name)
  combined_image_url = '%s\\combined_%s' % (dist_folder, image_name)
  combine_image(foreimage_url, baseimage_url, 10).save(combined_image_url)
`;function d(){var y=E.useState(O),o=C()(y,2),M=o[0],v=o[1];return(0,m.jsx)("div",{children:(0,m.jsx)(_.default,{height:400,value:M,language:"python",onChange:function(D){v(D)},theme:_.EMonacoEditorTheme.HCLight})})}},54721:function(j,i,e){e.r(i),e.d(i,{default:function(){return d}});var g=e(5574),C=e.n(g),_=e(31081),E=e(67294),m=e(85893),O=`// variables
$primary-color: #007bff;
$secondary-color: #6c757d;
$border-radius: 5px;

// mixins
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// main styles
body {
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  background-color: $primary-color;
  color: white;
  padding: 10px;
}

.footer {
  background-color: $secondary-color;
  color: white;
  padding: 10px;
}

.button {
  background-color: $primary-color;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: $border-radius;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}

.card {
  background-color: white;
  border-radius: $border-radius;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
`;function d(){var y=E.useState(O),o=C()(y,2),M=o[0],v=o[1];return(0,m.jsx)("div",{children:(0,m.jsx)(_.default,{height:400,value:M,language:"scss",onChange:function(D){v(D)},theme:_.EMonacoEditorTheme.VSDark})})}},39187:function(j,i,e){e.r(i),e.d(i,{default:function(){return d}});var g=e(5574),C=e.n(g),_=e(31081),E=e(67294),m=e(85893),O=`SELECT start_time, COUNT(DISTINCT lesson_uid) AS count FROM (SELECT FROM_UNIXTIME(s.start_time / 1000, '%Y-%m-%d') AS start_time, s.lesson_uid AS lesson_uid FROM \`audio_xx_tickets_summary\` s JOIN \`audio_xx_tickets_detail\` d ON d.ticket_id = s.ticket_id WHERE s.start_time BETWEEN 1561939200000 AND 1562630399000 AND s.ticket_bu = 2 AND d.message_page LIKE '%\u6742\u97F3%') temp1 GROUP BY start_time ORDER BY start_time DESC

SELECT start_time, COUNT(DISTINCT lesson_uid) AS count FROM (SELECT FROM_UNIXTIME(s.start_time / 1000, '%Y-%m-%d') AS start_time, s.lesson_uid AS lesson_uid FROM \`audio_xx_tickets_summary\` s JOIN \`audio_xx_tickets_detail\` d ON d.ticket_id = s.ticket_id WHERE s.start_time BETWEEN 1561939200000 AND 1562630399000 AND s.ticket_bu = 2 AND d.message_page LIKE '%\u56DE\u97F3%') temp1 GROUP BY start_time ORDER BY start_time DESC

SELECT start_time, COUNT(DISTINCT lesson_uid) AS count FROM (SELECT FROM_UNIXTIME(s.start_time / 1000, '%Y-%m-%d') AS start_time, s.lesson_uid AS lesson_uid FROM \`audio_xx_tickets_summary\` s JOIN \`audio_xx_tickets_detail\` d ON d.ticket_id = s.ticket_id WHERE s.start_time BETWEEN 1561939200000 AND 1562630399000 AND s.ticket_bu = 2) temp1 GROUP BY start_time ORDER BY start_time DESC

SELECT
  i.stat_date AS "time",
  ROUND(COUNT(i.id) / temp2.total * 100, 2) AS "value",
  IF(i.audio_name='','Unknown',i.audio_name) AS "metric"
FROM \`tb_avs_xx_day_ticket_info\` i
LEFT JOIN (
  SELECT
    stat_date,
    COUNT(id) AS total
  FROM \`tb_avs_xx_day_ticket_info\`
  GROUP BY stat_date
) temp2
ON i.stat_date = temp2.stat_date
WHERE
  i.audio_name IN (
    SELECT
      audio_name
    FROM (
      SELECT
        COUNT(id) AS count,
        audio_name
      FROM \`tb_avs_xx_day_ticket_info\`
      GROUP BY audio_name
      ORDER BY count DESC
      LIMIT 0, 20
    ) temp1
  )
GROUP BY i.stat_date, i.audio_name
ORDER BY i.stat_date DESC
`;function d(){var y=E.useState(O),o=C()(y,2),M=o[0],v=o[1];return(0,m.jsx)("div",{children:(0,m.jsx)(_.default,{height:400,value:M,language:"sql",onChange:function(D){v(D)},theme:_.EMonacoEditorTheme.VSDark})})}},25279:function(j,i,e){e.r(i),e.d(i,{default:function(){return d}});var g=e(5574),C=e.n(g),_=e(31081),E=e(67294),m=e(85893),O=`/* eslint-disable no-restricted-globals */
/* eslint-disable no-case-declarations */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import defaults from "lodash/defaults";
import groupBy from "lodash/groupBy";
import MyWorker from "worker-loader!./parser.worker.ts";

import {
  ICompletionItem,
  ICursorInfo,
  ITableInfo,
  reader,
} from "../sql-parser";
import { IParseResult } from "../syntax-parser";
import { DefaultOpts, IMonacoVersion, IParserType } from "./default-opts";

const supportedMonacoEditorVersion = ["0.13.2", "0.15.6"];

export function monacoSqlAutocomplete(
  monaco: any,
  editor: any,
  opts?: Partial<DefaultOpts>
) {
  opts = defaults(opts || {}, new DefaultOpts(monaco));

  // eslint-disable-next-line unicorn/prefer-includes
  if (supportedMonacoEditorVersion.indexOf(opts.monacoEditorVersion) === -1) {
    throw new Error(
      \`monaco-editor version \${
        opts.monacoEditorVersion
      } is not allowed, only support \${supportedMonacoEditorVersion.join(" ")}\`
    );
  }

  // Get parser info and show error.
  let currentParserPromise: any = null;
  let editVersion = 0;

  editor.onDidChangeModelContent((event: any) => {
    editVersion++;
    const currentEditVersion = editVersion;

    currentParserPromise = new Promise((resolve) => {
      setTimeout(() => {
        const model = editor.getModel();

        // eslint-disable-next-line promise/catch-or-return
        asyncParser(
          editor.getValue(),
          model.getOffsetAt(editor.getPosition()),
          opts.parserType
        ).then((parseResult) => {
          resolve(parseResult);

          if (currentEditVersion !== editVersion) {
            return;
          }

          opts.onParse(parseResult);

          if (parseResult.error) {
            const newReason =
              parseResult.error.reason === "incomplete"
                ? \`Incomplete, expect next input: 
\${parseResult.error.suggestions
                    .map((each) => {
                      return each.value;
                    })
                    .join("
")}\`
                : \`Wrong input, expect: 
\${parseResult.error.suggestions
                    .map((each) => {
                      return each.value;
                    })
                    .join("
")}\`;

            const errorPosition = parseResult.error.token
              ? {
                  startLineNumber: model.getPositionAt(
                    parseResult.error.token.position[0]
                  ).lineNumber,
                  startColumn: model.getPositionAt(
                    parseResult.error.token.position[0]
                  ).column,
                  endLineNumber: model.getPositionAt(
                    parseResult.error.token.position[1]
                  ).lineNumber,
                  endColumn:
                    model.getPositionAt(parseResult.error.token.position[1])
                      .column + 1,
                }
              : {
                  startLineNumber: 0,
                  startColumn: 0,
                  endLineNumber: 0,
                  endColumn: 0,
                };

            model.getPositionAt(parseResult.error.token);

            monaco.editor.setModelMarkers(model, opts.language, [
              {
                ...errorPosition,
                message: newReason,
                severity: getSeverityByVersion(
                  monaco,
                  opts.monacoEditorVersion
                ),
              },
            ]);
          } else {
            monaco.editor.setModelMarkers(editor.getModel(), opts.language, []);
          }
        });
      });
    });
  });

  monaco.languages.registerCompletionItemProvider(opts.language, {
    triggerCharacters:
      // eslint-disable-next-line unicorn/prefer-spread
      " $.:{}=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    provideCompletionItems: async () => {
      const currentEditVersion = editVersion;
      const parseResult: IParseResult = await currentParserPromise;

      if (currentEditVersion !== editVersion) {
        return returnCompletionItemsByVersion([], opts.monacoEditorVersion);
      }

      const cursorInfo = await reader.getCursorInfo(
        parseResult.ast,
        parseResult.cursorKeyPath
      );

      const parserSuggestion = opts.pipeKeywords(parseResult.nextMatchings);

      if (!cursorInfo) {
        return returnCompletionItemsByVersion(
          parserSuggestion,
          opts.monacoEditorVersion
        );
      }

      switch (cursorInfo.type) {
        case "tableField": {
          const cursorRootStatementFields = await reader.getFieldsFromStatement(
            parseResult.ast,
            parseResult.cursorKeyPath,
            opts.onSuggestTableFields
          );

          // group.fieldName
          const groups = groupBy(
            cursorRootStatementFields.filter((cursorRootStatementField) => {
              return cursorRootStatementField.groupPickerName !== null;
            }),
            "groupPickerName"
          );

          const functionNames = await opts.onSuggestFunctionName(
            cursorInfo.token.value
          );

          return returnCompletionItemsByVersion(
            [
              ...cursorRootStatementFields,
              ...parserSuggestion,
              ...functionNames,
              ...(groups
                ? Object.keys(groups).map((groupName) => {
                    return opts.onSuggestFieldGroup(groupName);
                  })
                : []),
            ],
            opts.monacoEditorVersion
          );
        }
        case "tableFieldAfterGroup": {
          // \u5B57\u6BB5 . \u540E\u9762\u7684\u90E8\u5206
          const cursorRootStatementFieldsAfter =
            await reader.getFieldsFromStatement(
              parseResult.ast,
              parseResult.cursorKeyPath as any,
              opts.onSuggestTableFields
            );

          return returnCompletionItemsByVersion(
            [
              ...cursorRootStatementFieldsAfter.filter(
                (cursorRootStatementField: any) => {
                  return (
                    cursorRootStatementField.groupPickerName ===
                    (cursorInfo as ICursorInfo<{ groupName: string }>).groupName
                  );
                }
              ),
              ...parserSuggestion,
            ],
            opts.monacoEditorVersion
          );
        }
        case "tableName": {
          const tableNames = await opts.onSuggestTableNames(
            cursorInfo as ICursorInfo<ITableInfo>
          );

          return returnCompletionItemsByVersion(
            [...tableNames, ...parserSuggestion],
            opts.monacoEditorVersion
          );
        }
        case "functionName": {
          return opts.onSuggestFunctionName(cursorInfo.token.value);
        }
        default: {
          return returnCompletionItemsByVersion(
            parserSuggestion,
            opts.monacoEditorVersion
          );
        }
      }
    },
  });

  monaco.languages.registerHoverProvider(opts.language, {
    provideHover: async (model: any, position: any) => {
      const parseResult: IParseResult = await asyncParser(
        editor.getValue(),
        model.getOffsetAt(position),
        opts.parserType
      );

      const cursorInfo = await reader.getCursorInfo(
        parseResult.ast,
        parseResult.cursorKeyPath
      );

      if (!cursorInfo) {
        return null as any;
      }

      let contents: any = [];

      switch (cursorInfo.type) {
        case "tableField": {
          const extra = await reader.findFieldExtraInfo(
            parseResult.ast,
            cursorInfo,
            opts.onSuggestTableFields,
            parseResult.cursorKeyPath
          );
          contents = await opts.onHoverTableField(
            cursorInfo.token.value,
            extra
          );
          break;
        }
        case "tableFieldAfterGroup": {
          const extraAfter = await reader.findFieldExtraInfo(
            parseResult.ast,
            cursorInfo,
            opts.onSuggestTableFields,
            parseResult.cursorKeyPath
          );
          contents = await opts.onHoverTableField(
            cursorInfo.token.value,
            extraAfter
          );
          break;
        }
        case "tableName": {
          contents = await opts.onHoverTableName(cursorInfo as ICursorInfo);
          break;
        }
        case "functionName": {
          contents = await opts.onHoverFunctionName(cursorInfo.token.value);
          break;
        }
        default:
      }

      return {
        range: monaco.Range.fromPositions(
          model.getPositionAt(cursorInfo.token.position[0]),
          model.getPositionAt(cursorInfo.token.position[1] + 1)
        ),
        contents,
      };
    },
  });
}

// \u5B9E\u4F8B\u5316\u4E00\u4E2A worker
const worker: Worker = new (MyWorker as any)();

let parserIndex = 0;

const asyncParser = async (
  text: string,
  index: number,
  parserType: IParserType
) => {
  parserIndex++;
  const currentParserIndex = parserIndex;

  let resolve: any = null;
  let reject: any = null;

  // eslint-disable-next-line promise/param-names
  const promise = new Promise((promiseResolve, promiseReject) => {
    resolve = promiseResolve;
    reject = promiseReject;
  });

  worker.postMessage({ text, index, parserType });

  // eslint-disable-next-line unicorn/prefer-add-event-listener
  worker.onmessage = (event) => {
    if (currentParserIndex === parserIndex) {
      resolve(event.data);
    } else {
      reject();
    }
  };

  return promise as Promise<IParseResult>;
};

function returnCompletionItemsByVersion(
  value: ICompletionItem[],
  monacoVersion: IMonacoVersion
) {
  switch (monacoVersion) {
    case "0.13.2": {
      return value;
    }
    case "0.15.6": {
      return {
        suggestions: value,
      };
    }
    default: {
      throw new Error("Not supported version");
    }
  }
}

function getSeverityByVersion(monaco: any, monacoVersion: IMonacoVersion) {
  switch (monacoVersion) {
    case "0.13.2": {
      return monaco.Severity.Error;
    }
    case "0.15.6": {
      return monaco.MarkerSeverity.Error;
    }
    default: {
      throw new Error("Not supported version");
    }
  }
}
`;function d(){var y=E.useState(O),o=C()(y,2),M=o[0],v=o[1];return(0,m.jsx)("div",{children:(0,m.jsx)(_.default,{height:400,value:M,language:"typescript",onChange:function(D){v(D)},theme:_.EMonacoEditorTheme.VSDark})})}},32001:function(j,i,e){e.r(i),e.d(i,{default:function(){return d}});var g=e(5574),C=e.n(g),_=e(31081),E=e(67294),m=e(85893),O=`name: CI

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Run tests
        run: npm test`;function d(){var y=E.useState(O),o=C()(y,2),M=o[0],v=o[1];return(0,m.jsx)("div",{children:(0,m.jsx)(_.default,{height:400,value:M,language:"yaml",onChange:function(D){v(D)},theme:_.EMonacoEditorTheme.VSDark})})}},81943:function(j,i,e){e.d(i,{EMonacoEditorTheme:function(){return F},Languages:function(){return p},default:function(){return we}});var g=e(9783),C=e.n(g),_=e(97857),E=e.n(_),m=e(93967),O=e.n(m),d=e(8812),y=e(94565),o=e(67294),M=e(64599),v=e.n(M);function A(){var t;return(t=document.querySelector("html"))!==null&&t!==void 0&&t.classList.contains("dark")?"dark":"light"}function D(t){var r=document.querySelector("html"),a=new MutationObserver(function(h){var n=v()(h),b;try{for(n.s();!(b=n.n()).done;){var R=b.value;R.type==="attributes"&&R.attributeName==="class"&&(r!=null&&r.classList.contains("dark")?t("dark"):t("light"))}}catch(I){n.e(I)}finally{n.f()}});return a.observe(r,{attributes:!0}),function(){a.disconnect()}}function Ke(){var t=document.querySelector("html");if(t==null||t.classList.add("disable-transitions"),t!=null&&t.classList.contains("dark")){t.classList.remove("dark");try{window.localStorage.setItem("theme","light")}catch(r){}}else{t==null||t.classList.add("dark");try{window.localStorage.setItem("theme","dark")}catch(r){}}window.setTimeout(function(){t==null||t.classList.remove("disable-transitions")},0)}var Re=e(15009),L=e.n(Re),Oe=e(99289),Me=e.n(Oe);function ke(){return new Worker(e.p+"prettier.worker.2d888fd8.worker.js")}var S=e(50717);function Pe(t){var r=new t,a=new S.Z({concurrency:1});return{worker:r,emit:function(n){a.clear();var b=Math.random().toString(36).slice(2,7);return r.postMessage({_current:b}),a.add(function(){return new Promise(function(R){function I(k){k.data._id===b&&(r.removeEventListener("message",I),R(k.data))}r.addEventListener("message",I),r.postMessage(E()(E()({},n),{},{_id:b}))})})},terminate:function(){r.terminate()}}}function Ve(t,r){return new Promise(function(a){var h=Math.random().toString(36).slice(2,7);function n(b){b.data._id===h&&(t.removeEventListener("message",n),a(b.data))}t.addEventListener("message",n),t.postMessage(_objectSpread(_objectSpread({},r),{},{_id:h}))})}var Ie=e(19632),W=e.n(Ie),Se={python:"",less:"",scss:"",css:"",typescript:"",javascript:"",json:"",sql:"",markdown:"",html:"",yaml:"",plaintext:"",graphql:"",abap:"",apex:"",azcli:"",bat:"",bicep:"",cameligo:"",clojure:"",coffeescript:"",c:"",cpp:"",csharp:"",csp:"",cypher:"",dart:"",dockerfile:"",ecl:"",elixir:"",flow9:"",fsharp:"",freemarker2:"","freemarker2.tag-angle.interpolation-dollar":"","freemarker2.tag-bracket.interpolation-dollar":"","freemarker2.tag-angle.interpolation-bracket":"","freemarker2.tag-bracket.interpolation-bracket":"","freemarker2.tag-auto.interpolation-dollar":"","freemarker2.tag-auto.interpolation-bracket":"",go:"",handlebars:"",hcl:"",ini:"",java:"",julia:"",kotlin:"",lexon:"",lua:"",liquid:"",m3:"",mips:"",msdax:"",mysql:"","objective-c":"",pascal:"",pascaligo:"",perl:"",pgsql:"",php:"",pla:"",postiats:"",powerquery:"",powershell:"",proto:"",pug:"",qsharp:"",r:"",razor:"",redis:"",redshift:"",restructuredtext:"",ruby:"",rust:"",sb:"",scala:"",scheme:"",shell:"",sol:"",aes:"",sparql:"",st:"",swift:"",systemverilog:"",verilog:"",tcl:"",twig:"",vb:"",xml:""},Fe={json:"json",javascript:"babel",typescript:"typescript",css:"css",less:"less",scss:"scss",markdown:"markdown",graphql:"graphql",handlebars:"handlebars",html:"html",yaml:"yaml"},de=[].concat(W()(Object.keys(Fe)),["rust","sql","java"]),p=Object.keys(Se),F=function(t){return t.VS="vs",t.VSDark="vs-dark",t.HCBlack="hc-black",t.HCLight="hc-light",t}({}),z;function ce(t,r){return ee.apply(this,arguments)}function ee(){return ee=Me()(L()().mark(function t(r,a){return L()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return z||(z=Pe(ke)),n.next=3,z.emit({text:r,language:a});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}},t)})),ee.apply(this,arguments)}function Te(){var t=[],r={provideDocumentFormattingEdits:function(R){return Me()(L()().mark(function I(){var k,X,U,B;return L()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,ce(R.getValue(),R.getLanguageId());case 2:if(k=T.sent,X=k.canceled,U=k.error,B=k.pretty,!(X||U)){T.next=8;break}return T.abrupt("return",[]);case 8:return T.abrupt("return",[{range:R.getFullModelRange(),text:B}]);case 9:case"end":return T.stop()}},I)}))()}},a=v()(de),h;try{for(a.s();!(h=a.n()).done;){var n=h.value;t.push(d.languages.registerDocumentFormattingEditProvider(n,r))}}catch(b){a.e(b)}finally{a.f()}return{dispose:function(){for(var R=0,I=t;R<I.length;R++){var k=I[R];k.dispose()}z&&z.terminate()}}}var xe=e(85893);function Ne(t){var r=monaco.Uri.file("index.tsx"),a=monaco.editor.createModel(t||"","typescript",r);return monaco.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:"react"}),monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!1,noSyntaxValidation:!1}),a}function Ae(t){var r=monaco.Uri.file("index.html"),a=monaco.editor.createModel(t||"","html",r);return a}function We(t){var r=monaco.Uri.file("index.js"),a=monaco.editor.createModel(t||"","javascript",r);return a}function $e(t){var r=monaco.Uri.file("index.ts"),a=monaco.editor.createModel(t||"","typescript",r);return a}function Ue(t){var r=monaco.Uri.file("index.css"),a=monaco.editor.createModel(t||"","css",r);return a}function _e(t){return/^\d+$/.test(t)?"".concat(t,"px"):t}function me(t){var r="editor.action.formatDocument",a=y.P.getCommand(r),h=a.handler,n=a.when;return t._standaloneKeybindingService.addDynamicKeybinding(r,d.KeyMod.CtrlCmd|d.KeyCode.KeyS,h,n)}var Be=function(r,a){var h=r.theme,n=r.prefixCls,b=n===void 0?"hlui-monaco-editor":n,R=r.width,I=R===void 0?"100%":R,k=r.height,X=k===void 0?"100%":k,U=r.value,B=U===void 0?"":U,K=r.defaultValue,T=K===void 0?"":K,ne=r.className,H=r.language,J=H===void 0?"html":H,pe=r.readOnly,Q=pe===void 0?!1:pe,te=r.highlightWhitespace,re=te===void 0?!0:te,fe=r.highlightActiveLine,Z=fe===void 0?!0:fe,oe=r.formatOnSave,ae=oe===void 0?!0:oe,ge=r.options,V=ge===void 0?{}:ge,se=r.onChange,je=se===void 0?function(){}:se,he=r.onWillMount,Ee=he===void 0?function(c){}:he,ie=r.onMount,Le=ie===void 0?function(c,f){}:ie,ve=r.onWillUnmount,be=ve===void 0?function(c,f){}:ve,le=r.getWebAppTheme,Ce=le===void 0?A:le,ye=r.onWebAppThemeChange,ue=ye===void 0?D:ye,Y=(0,o.useRef)(null),s=(0,o.useRef)(null),w=(0,o.useRef)(null),G=(0,o.useRef)(!1),De=_e(I),l=_e(X),u=(0,o.useMemo)(function(){return{width:De,height:l}},[De,l]);function $(){return s.current}function N(c,f){if(s.current){var x=f||s.current.getModel().getLanguageId();return de.includes(x)?ce(c||s.current.getValue(),f||s.current.getModel().getLanguageId()):Promise.resolve({error:new Error("".concat(x,"\u8BED\u8A00\u6682\u4E0D\u652F\u6301\u683C\u5F0F\u5316\uFF01"))})}return Promise.resolve({error:new Error("\u7F16\u8F91\u5668\u4E0D\u5B58\u5728\uFF01")})}return(0,o.useImperativeHandle)(a,function(){return{getEditor:$,format:N,monaco:d}},[]),(0,o.useEffect)(function(){if(Y.current&&J){Ee(d);var c=h||(Ce()==="light"?F.VSDark:F.VS);if(s.current=d.editor.create(Y.current,E()({readOnly:Q,language:J,acceptSuggestionOnCommitCharacter:!0,acceptSuggestionOnEnter:"on",accessibilityPageSize:10,accessibilitySupport:"off",autoClosingBrackets:"always",autoClosingDelete:"always",autoClosingOvertype:"always",autoClosingQuotes:"always",autoIndent:"none",automaticLayout:!0,foldingStrategy:"indentation",codeLens:!1,codeLensFontFamily:"",codeLensFontSize:14,colorDecorators:!1,comments:{ignoreEmptyLines:!0,insertSpace:!0},contextmenu:!0,columnSelection:!1,autoSurround:"never",copyWithSyntaxHighlighting:!0,cursorBlinking:"blink",cursorSmoothCaretAnimation:"off",cursorStyle:"line",cursorSurroundingLines:0,cursorSurroundingLinesStyle:"all",cursorWidth:2,minimap:{enabled:!1},folding:!0,links:!0,overviewRulerBorder:!1,renderLineHighlight:Z?"line":"none",roundedSelection:!1,scrollBeyondLastLine:!1,theme:c,tabSize:2,renderWhitespace:re?"all":"none"},V)),s.current.setValue(B||T),s.current.onDidChangeModelContent(function(He){je(s.current.getValue(),He)}),ae){var f=me(s.current),x=f.dispose;G.current=!0,w.current=function(){x(),G.current=!1}}Le(s.current,d)}var q=Te(),P=q.dispose;return function(){be(s.current,d),s.current&&s.current.dispose(),P(),w.current&&w.current()}},[]),(0,o.useEffect)(function(){if(ae){if(!G.current){G.current=!0;var c=me(s.current),f=c.dispose;w.current=function(){f(),G.current=!1}}}else w.current&&w.current()},[ae]),(0,o.useEffect)(function(){if(s.current){var c=s.current.getModel();d.editor.setModelLanguage(c,J)}},[J]),(0,o.useEffect)(function(){if(s!=null&&s.current){var c,f=(c=s.current)===null||c===void 0?void 0:c.getValue();f!==B&&s.current.setValue(B)}},[B]),(0,o.useEffect)(function(){s!=null&&s.current&&s.current.updateOptions({readOnly:Q})},[Q]),(0,o.useEffect)(function(){s!=null&&s.current&&s.current.updateOptions({renderLineHighlight:Z?"line":"none"})},[Z]),(0,o.useEffect)(function(){s!=null&&s.current&&s.current.updateOptions({renderWhitespace:re?"all":"none"})},[re]),(0,o.useEffect)(function(){var c=h||V.theme||(Ce()==="light"?F.VSDark:F.VS);d.editor.setTheme(c)},[V.theme,h]),(0,o.useEffect)(function(){function c(x){var q=h||V.theme||(x==="light"?F.VSDark:F.VS);d.editor.setTheme(q)}var f=ue(c);return function(){return f&&f()}},[V.theme,h,ue]),(0,o.useEffect)(function(){var c=new ResizeObserver(function(){window.setTimeout(function(){return s.current.layout()},0)});return c.observe(Y.current),function(){c.disconnect()}},[]),(0,xe.jsx)("div",{ref:Y,className:O()("".concat(b),C()({},ne,ne)),style:u})},we=(0,o.forwardRef)(Be)},31081:function(j,i,e){e.d(i,{EMonacoEditorTheme:function(){return g.EMonacoEditorTheme},Languages:function(){return g.Languages}});var g=e(81943),C=e(8812);i.default=g.default}}]);
