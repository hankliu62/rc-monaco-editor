(self.webpackChunk_hankliu_rc_monaco_editor=self.webpackChunk_hankliu_rc_monaco_editor||[]).push([[2433],{8183:function(w,s,e){"use strict";e.r(s),e.d(s,{default:function(){return Y}});var c=e(15427),b=e.n(c),_=e(76531),h=e.n(_),m=e(37432),M=e.n(m),u=e(13226),C=e.n(u),o=e(91814),k=e.n(o),D=e(63430),A=e.n(D),y=e(37047),$e=e.n(y),ke=e(61456),Q=e.n(ke),Le=e(22325),Fe=e.n(Le),me=e(69399),B=e.n(me),Pe=e(93397),Ie=e.n(Pe),Se=e(91228),W=e.n(Se),Te=e(84915),We=e.n(Te),Ne=e(32027),p=e.n(Ne),Ue=e(92035),He=e.n(Ue),Ke=e(19596),xe=e.n(Ke),pe=e(64599),fe=e.n(pe),L=e(15009),ge=e.n(L),Ae=e(60579),r=e.n(Ae),n=e(35138),d=e.n(n),E=e(99289),g=e.n(E),P=e(5574),v=e.n(P),R=e(31081),I=e(37338),O=e(67294),$=e(67939),t=e(85893),j={html:`<h1>Turndown Demo</h1>

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
          run: npm test`},Z=[R.EMonacoEditorTheme.VS,R.EMonacoEditorTheme.VSDark,R.EMonacoEditorTheme.HCLight,R.EMonacoEditorTheme.HCBlack],H=["100%","200px","300px","500px"];function Y(){var G=O.useState(j.html),T=v()(G,2),z=T[0],X=T[1],ne=O.useState("html"),te=v()(ne,2),N=te[0],he=te[1],re=O.useState(R.EMonacoEditorTheme.VSDark),oe=v()(re,2),U=oe[0],Ee=oe[1],Be=O.useState("500px"),ae=v()(Be,2),ve=ae[0],be=ae[1],we=O.useState(!0),se=v()(we,2),Ce=se[0],De=se[1],ye=O.useState(!0),ie=v()(ye,2),ue=ie[0],q=ie[1],a=O.useState(!0),F=v()(a,2),K=F[0],je=F[1],Re=O.useState(!0),le=v()(Re,2),Oe=le[0],f=le[1],S=O.useRef();O.useEffect(function(){S.current||(S.current=(0,R.createWorkerQueue)(I.Z))},[]);var de=O.useCallback(function(){var l=g()(ge()().mark(function i(ee){var J,Me,V,_e;return ge()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:if(!S.current){x.next=13;break}return x.next=3,S.current.emit({text:ee||z,language:N});case 3:if(J=x.sent,Me=J.canceled,V=J.error,_e=J.pretty,!V){x.next=10;break}return d().error(V.message),x.abrupt("return");case 10:if(!Me){x.next=12;break}return x.abrupt("return");case 12:X(_e);case 13:case"end":return x.stop()}},i)}));return function(i){return l.apply(this,arguments)}}(),[z,N]),ce=function(i){var ee=document.querySelector("html"),J=new MutationObserver(function(Me){var V=fe()(Me),_e;try{for(V.s();!(_e=V.n()).done;){var Ve=_e.value;Ve.type==="attributes"&&((ee==null?void 0:ee.getAttribute("data-prefers-color"))==="dark"?i("dark"):i("light"))}}catch(x){V.e(x)}finally{V.f()}});return J.observe(ee,{attributes:!0}),function(){J.disconnect()}};return(0,t.jsxs)(h(),{locale:$.default,children:[(0,t.jsx)(R.default,{height:ve,value:z,language:N,readOnly:!Ce,highlightWhitespace:ue,highlightActiveLine:K,formatOnSave:Oe,onChange:function(i){X(i)},getWebAppTheme:function(){var i;return((i=document.querySelector("html"))===null||i===void 0?void 0:i.getAttribute("data-prefers-color"))==="dark"?"dark":"light"},onWebAppThemeChange:ce,theme:U}),(0,t.jsx)(xe(),{}),(0,t.jsxs)(B(),{gutter:16,children:[(0,t.jsx)(p(),{span:8,children:(0,t.jsxs)(B(),{align:"middle",children:[(0,t.jsx)(p(),{flex:"80px",children:"\u8BED\u8A00:"}),(0,t.jsx)(p(),{flex:"1",children:(0,t.jsx)(W(),{value:N,style:{width:"100%"},onChange:function(i){X(j[i]||""),he(i)},showSearch:!0,children:R.Languages.sort().map(function(l){return(0,t.jsx)(W().Option,{value:l,children:l},l)})})})]})}),(0,t.jsx)(p(),{span:8,children:(0,t.jsxs)(B(),{align:"middle",children:[(0,t.jsx)(p(),{flex:"80px",children:"\u4E3B\u9898:"}),(0,t.jsx)(p(),{flex:"1",children:(0,t.jsx)(W(),{value:U,style:{width:"100%"},onChange:function(i){Ee(i)},showSearch:!0,allowClear:!0,children:Z.map(function(l){return(0,t.jsx)(W().Option,{value:l,children:l},l)})})})]})}),(0,t.jsx)(p(),{span:8,children:(0,t.jsxs)(B(),{align:"middle",children:[(0,t.jsx)(p(),{flex:"80px",children:"\u9AD8\u5EA6:"}),(0,t.jsx)(p(),{flex:"1",children:(0,t.jsx)(W(),{value:ve,style:{width:"100%"},onChange:function(i){be(i)},showSearch:!0,children:H.map(function(l){return(0,t.jsx)(W().Option,{value:l,children:l},l)})})})]})})]}),(0,t.jsxs)(B(),{gutter:16,style:{marginTop:"16px"},children:[(0,t.jsx)(p(),{span:8,children:(0,t.jsxs)(B(),{align:"middle",children:[(0,t.jsx)(p(),{flex:"80px",children:"\u53EF\u7F16\u8F91:"}),(0,t.jsx)(p(),{flex:"1",children:(0,t.jsx)(Q(),{checked:Ce,onChange:function(i){De(i.target.checked)},children:"\u662F\u5426\u53EF\u7F16\u8F91"})})]})}),(0,t.jsx)(p(),{span:8,children:(0,t.jsxs)(B(),{align:"middle",children:[(0,t.jsx)(p(),{flex:"80px",children:"\u9AD8\u4EAE\u7A7A\u683C:"}),(0,t.jsx)(p(),{flex:"1",children:(0,t.jsx)(Q(),{checked:ue,onChange:function(i){q(i.target.checked)},children:"\u662F\u5426\u9AD8\u4EAE"})})]})}),(0,t.jsx)(p(),{span:8,children:(0,t.jsxs)(B(),{align:"middle",children:[(0,t.jsx)(p(),{flex:"80px",children:"\u9AD8\u4EAE\u5F53\u524D\u884C:"}),(0,t.jsx)(p(),{flex:"1",children:(0,t.jsx)(Q(),{checked:K,onChange:function(i){je(i.target.checked)},children:"\u662F\u5426\u9AD8\u4EAE"})})]})})]}),(0,t.jsxs)(B(),{gutter:16,style:{marginTop:"16px"},children:[(0,t.jsx)(p(),{span:8,children:(0,t.jsxs)(B(),{align:"middle",children:[(0,t.jsx)(p(),{flex:"80px",children:"\u81EA\u52A8\u683C\u5F0F\u5316:"}),(0,t.jsx)(p(),{flex:"1",children:(0,t.jsx)(Q(),{checked:Oe,onChange:function(i){f(i.target.checked)},children:"\u4FDD\u5B58\u662F\u5426\u81EA\u52A8\u683C\u5F0F\u5316"})})]})}),(0,t.jsx)(p(),{span:8,children:(0,t.jsxs)(C(),{size:16,children:[(0,t.jsx)(A(),{onClick:function(){X("")},children:"\u6E05\u7A7A\u5185\u5BB9"}),(0,t.jsx)(A(),{onClick:function(){de()},children:"\u683C\u5F0F\u5316"})]})})]})]})}},86478:function(w,s,e){"use strict";e.r(s),e.d(s,{default:function(){return u}});var c=e(5574),b=e.n(c),_=e(31081),h=e(67294),m=e(85893),M=`(function(w){
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
`;function u(){var C=h.useState(M),o=b()(C,2),k=o[0],D=o[1];return(0,m.jsx)("div",{style:{backgroundColor:"#000",padding:"20px",borderRadius:"4px"},children:(0,m.jsx)(_.default,{height:400,value:k,language:"javascript",onChange:function(y){D(y)},theme:_.EMonacoEditorTheme.HCLight})})}},87867:function(w,s,e){"use strict";e.r(s),e.d(s,{default:function(){return u}});var c=e(5574),b=e.n(c),_=e(31081),h=e(67294),m=e(85893),M=`# Turndown Demo

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
`;function u(){var C=h.useState(M),o=b()(C,2),k=o[0],D=o[1];return(0,m.jsx)("div",{children:(0,m.jsx)(_.default,{height:400,value:k,language:"markdown",onChange:function(y){D(y)},theme:_.EMonacoEditorTheme.VS})})}},42910:function(w,s,e){"use strict";e.r(s),e.d(s,{default:function(){return u}});var c=e(5574),b=e.n(c),_=e(31081),h=e(67294),m=e(85893),M=`# encoding:utf-8
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
`;function u(){var C=h.useState(M),o=b()(C,2),k=o[0],D=o[1];return(0,m.jsx)("div",{children:(0,m.jsx)(_.default,{height:400,value:k,language:"python",onChange:function(y){D(y)},theme:_.EMonacoEditorTheme.HCLight})})}},54721:function(w,s,e){"use strict";e.r(s),e.d(s,{default:function(){return u}});var c=e(5574),b=e.n(c),_=e(31081),h=e(67294),m=e(85893),M=`// variables
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
`;function u(){var C=h.useState(M),o=b()(C,2),k=o[0],D=o[1];return(0,m.jsx)("div",{children:(0,m.jsx)(_.default,{height:400,value:k,language:"scss",onChange:function(y){D(y)},theme:_.EMonacoEditorTheme.VSDark})})}},39187:function(w,s,e){"use strict";e.r(s),e.d(s,{default:function(){return u}});var c=e(5574),b=e.n(c),_=e(31081),h=e(67294),m=e(85893),M=`SELECT start_time, COUNT(DISTINCT lesson_uid) AS count FROM (SELECT FROM_UNIXTIME(s.start_time / 1000, '%Y-%m-%d') AS start_time, s.lesson_uid AS lesson_uid FROM \`audio_xx_tickets_summary\` s JOIN \`audio_xx_tickets_detail\` d ON d.ticket_id = s.ticket_id WHERE s.start_time BETWEEN 1561939200000 AND 1562630399000 AND s.ticket_bu = 2 AND d.message_page LIKE '%\u6742\u97F3%') temp1 GROUP BY start_time ORDER BY start_time DESC

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
`;function u(){var C=h.useState(M),o=b()(C,2),k=o[0],D=o[1];return(0,m.jsx)("div",{children:(0,m.jsx)(_.default,{height:400,value:k,language:"sql",onChange:function(y){D(y)},theme:_.EMonacoEditorTheme.VSDark})})}},25279:function(w,s,e){"use strict";e.r(s),e.d(s,{default:function(){return u}});var c=e(5574),b=e.n(c),_=e(31081),h=e(67294),m=e(85893),M=`/* eslint-disable no-restricted-globals */
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
`;function u(){var C=h.useState(M),o=b()(C,2),k=o[0],D=o[1];return(0,m.jsx)("div",{children:(0,m.jsx)(_.default,{height:400,value:k,language:"typescript",onChange:function(y){D(y)},theme:_.EMonacoEditorTheme.VSDark})})}},32001:function(w,s,e){"use strict";e.r(s),e.d(s,{default:function(){return u}});var c=e(5574),b=e.n(c),_=e(31081),h=e(67294),m=e(85893),M=`name: CI

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
        run: npm test`;function u(){var C=h.useState(M),o=b()(C,2),k=o[0],D=o[1];return(0,m.jsx)("div",{children:(0,m.jsx)(_.default,{height:400,value:k,language:"yaml",onChange:function(y){D(y)},theme:_.EMonacoEditorTheme.VSDark})})}},32981:function(w,s,e){"use strict";e.d(s,{EMonacoEditorTheme:function(){return L},Languages:function(){return Q},createWorkerQueue:function(){return me},default:function(){return Ae}});var c=e(9783),b=e.n(c),_=e(97857),h=e.n(_),m=e(93967),M=e.n(m),u=e(8812),C=e(94565),o=e(67294),k=e(64599),D=e.n(k);function A(){var r;return(r=document.querySelector("html"))!==null&&r!==void 0&&r.classList.contains("dark")?"dark":"light"}function y(r){var n=document.querySelector("html"),d=new MutationObserver(function(E){var g=D()(E),P;try{for(g.s();!(P=g.n()).done;){var v=P.value;v.type==="attributes"&&v.attributeName==="class"&&(n!=null&&n.classList.contains("dark")?r("dark"):r("light"))}}catch(R){g.e(R)}finally{g.f()}});return d.observe(n,{attributes:!0}),function(){d.disconnect()}}function $e(){var r=document.querySelector("html");if(r==null||r.classList.add("disable-transitions"),r!=null&&r.classList.contains("dark")){r.classList.remove("dark");try{window.localStorage.setItem("theme","light")}catch(n){}}else{r==null||r.classList.add("dark");try{window.localStorage.setItem("theme","dark")}catch(n){}}window.setTimeout(function(){r==null||r.classList.remove("disable-transitions")},0)}var ke={python:"",less:"",scss:"",css:"",typescript:"",javascript:"",json:"",sql:"",markdown:"",html:"",yaml:"",plaintext:"",graphql:"",abap:"",apex:"",azcli:"",bat:"",bicep:"",cameligo:"",clojure:"",coffeescript:"",c:"",cpp:"",csharp:"",csp:"",cypher:"",dart:"",dockerfile:"",ecl:"",elixir:"",flow9:"",fsharp:"",freemarker2:"","freemarker2.tag-angle.interpolation-dollar":"","freemarker2.tag-bracket.interpolation-dollar":"","freemarker2.tag-angle.interpolation-bracket":"","freemarker2.tag-bracket.interpolation-bracket":"","freemarker2.tag-auto.interpolation-dollar":"","freemarker2.tag-auto.interpolation-bracket":"",go:"",handlebars:"",hcl:"",ini:"",java:"",julia:"",kotlin:"",lexon:"",lua:"",liquid:"",m3:"",mips:"",msdax:"",mysql:"","objective-c":"",pascal:"",pascaligo:"",perl:"",pgsql:"",php:"",pla:"",postiats:"",powerquery:"",powershell:"",proto:"",pug:"",qsharp:"",r:"",razor:"",redis:"",redshift:"",restructuredtext:"",ruby:"",rust:"",sb:"",scala:"",scheme:"",shell:"",sol:"",aes:"",sparql:"",st:"",swift:"",systemverilog:"",verilog:"",tcl:"",twig:"",vb:"",xml:""},Q=Object.keys(ke),Le=e(38040),Fe=e(50717);function me(r){var n=new r,d=new Fe.Z({concurrency:1});return{worker:n,emit:function(g){d.clear();var P=Math.random().toString(36).slice(2,7);return n.postMessage({_current:P}),d.add(function(){return new Promise(function(v){function R(I){I.data._id===P&&(n.removeEventListener("message",R),v(I.data))}n.addEventListener("message",R),n.postMessage(h()(h()({},g),{},{_id:P}))})})},terminate:function(){n.terminate()}}}function B(r,n){return new Promise(function(d){var E=Math.random().toString(36).slice(2,7);function g(P){P.data._id===E&&(r.removeEventListener("message",g),d(P.data))}r.addEventListener("message",g),r.postMessage(_objectSpread(_objectSpread({},n),{},{_id:E}))})}var Pe=e(15009),Ie=e.n(Pe),Se=e(99289),W=e.n(Se),Te=e(37338);function We(){for(var r=[],n,d={provideDocumentFormattingEdits:function(I,O,$){return W()(Ie()().mark(function t(){var j,Z,H,Y;return Ie()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return n||(n=me(Te.Z)),T.next=3,n.emit({text:I.getValue(),language:I.getLanguageId()});case 3:if(j=T.sent,Z=j.canceled,H=j.error,Y=j.pretty,!(Z||H)){T.next=9;break}return T.abrupt("return",[]);case 9:return T.abrupt("return",[{range:I.getFullModelRange(),text:Y}]);case 10:case"end":return T.stop()}},t)}))()}},E=["json","javascript","typescript","css","less","scss","markdown","graphql","handlebars","html","yaml","sql"],g=0,P=E;g<P.length;g++){var v=P[g];r.push(u.languages.registerDocumentFormattingEditProvider(v,d))}return{dispose:function(){for(var I=0,O=r;I<O.length;I++){var $=O[I];$.dispose()}n&&n.terminate()}}}function Ne(r){var n=monaco.Uri.file("index.tsx"),d=monaco.editor.createModel(r||"","typescript",n);return monaco.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:"react"}),monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!1,noSyntaxValidation:!1}),d}function p(r){var n=monaco.Uri.file("index.html"),d=monaco.editor.createModel(r||"","html",n);return d}function Ue(r){var n=monaco.Uri.file("index.js"),d=monaco.editor.createModel(r||"","javascript",n);return d}function He(r){var n=monaco.Uri.file("index.ts"),d=monaco.editor.createModel(r||"","typescript",n);return d}function Ke(r){var n=monaco.Uri.file("index.css"),d=monaco.editor.createModel(r||"","css",n);return d}var xe=e(85893);function pe(r){return/^\d+$/.test(r)?"".concat(r,"px"):r}function fe(r){var n="editor.action.formatDocument",d=C.P.getCommand(n),E=d.handler,g=d.when;return r._standaloneKeybindingService.addDynamicKeybinding(n,u.KeyMod.CtrlCmd|u.KeyCode.KeyS,E,g)}var L=function(r){return r.VS="vs",r.VSDark="vs-dark",r.HCBlack="hc-black",r.HCLight="hc-light",r}({}),ge=function(n,d){var E=n.theme,g=n.prefixCls,P=g===void 0?"hlui-monaco-editor":g,v=n.width,R=v===void 0?"100%":v,I=n.height,O=I===void 0?"100%":I,$=n.value,t=$===void 0?"":$,j=n.defaultValue,Z=j===void 0?"":j,H=n.className,Y=n.language,G=Y===void 0?"html":Y,T=n.readOnly,z=T===void 0?!1:T,X=n.highlightWhitespace,ne=X===void 0?!0:X,te=n.highlightActiveLine,N=te===void 0?!0:te,he=n.formatOnSave,re=he===void 0?!0:he,oe=n.options,U=oe===void 0?{}:oe,Ee=n.onChange,Be=Ee===void 0?function(){}:Ee,ae=n.onWillMount,ve=ae===void 0?function(f){}:ae,be=n.onMount,we=be===void 0?function(f,S){}:be,se=n.onWillUnmount,Ce=se===void 0?function(f,S){}:se,De=n.getWebAppTheme,ye=De===void 0?A:De,ie=n.onWebAppThemeChange,ue=ie===void 0?y:ie,q=(0,o.useRef)(null),a=(0,o.useRef)(null),F=(0,o.useRef)(null),K=(0,o.useRef)(!1);function je(){return a.current}var Re=pe(R),le=pe(O),Oe=(0,o.useMemo)(function(){return{width:Re,height:le}},[Re,le]);return(0,o.useImperativeHandle)(d,function(){return{getEditor:je,monaco:u}},[]),(0,o.useEffect)(function(){if(q.current&&G){ve(u);var f=E||(ye()==="light"?L.VSDark:L.VS);if(a.current=u.editor.create(q.current,h()({readOnly:z,language:G,acceptSuggestionOnCommitCharacter:!0,acceptSuggestionOnEnter:"on",accessibilityPageSize:10,accessibilitySupport:"off",autoClosingBrackets:"always",autoClosingDelete:"always",autoClosingOvertype:"always",autoClosingQuotes:"always",autoIndent:"none",automaticLayout:!0,foldingStrategy:"indentation",codeLens:!1,codeLensFontFamily:"",codeLensFontSize:14,colorDecorators:!1,comments:{ignoreEmptyLines:!0,insertSpace:!0},contextmenu:!0,columnSelection:!1,autoSurround:"never",copyWithSyntaxHighlighting:!0,cursorBlinking:"blink",cursorSmoothCaretAnimation:"off",cursorStyle:"line",cursorSurroundingLines:0,cursorSurroundingLinesStyle:"all",cursorWidth:2,minimap:{enabled:!1},folding:!0,links:!0,overviewRulerBorder:!1,renderLineHighlight:N?"line":"none",roundedSelection:!1,scrollBeyondLastLine:!1,theme:f,tabSize:2,renderWhitespace:ne?"all":"none"},U)),a.current.setValue(t||Z),a.current.onDidChangeModelContent(function(i){Be(a.current.getValue(),i)}),re){var S=fe(a.current),de=S.dispose;K.current=!0,F.current=function(){de(),K.current=!1}}we(a.current,u)}var ce=We(),l=ce.dispose;return function(){Ce(a.current,u),a.current&&a.current.dispose(),l(),F.current&&F.current()}},[]),(0,o.useEffect)(function(){if(re){if(!K.current){K.current=!0;var f=fe(a.current),S=f.dispose;F.current=function(){S(),K.current=!1}}}else F.current&&F.current()},[re]),(0,o.useEffect)(function(){if(a.current){var f=a.current.getModel();u.editor.setModelLanguage(f,G)}},[G]),(0,o.useEffect)(function(){if(a!=null&&a.current){var f,S=(f=a.current)===null||f===void 0?void 0:f.getValue();S!==t&&a.current.setValue(t)}},[t]),(0,o.useEffect)(function(){a!=null&&a.current&&a.current.updateOptions({readOnly:z})},[z]),(0,o.useEffect)(function(){a!=null&&a.current&&a.current.updateOptions({renderLineHighlight:N?"line":"none"})},[N]),(0,o.useEffect)(function(){a!=null&&a.current&&a.current.updateOptions({renderWhitespace:ne?"all":"none"})},[ne]),(0,o.useEffect)(function(){var f=E||U.theme||(ye()==="light"?L.VSDark:L.VS);u.editor.setTheme(f)},[U.theme,E]),(0,o.useEffect)(function(){function f(de){var ce=E||U.theme||(de==="light"?L.VSDark:L.VS);u.editor.setTheme(ce)}var S=ue(f);return function(){return S&&S()}},[U.theme,E,ue]),(0,o.useEffect)(function(){var f=new ResizeObserver(function(){window.setTimeout(function(){return a.current.layout()},0)});return f.observe(q.current),function(){f.disconnect()}},[]),(0,xe.jsx)("div",{ref:q,className:M()("".concat(P),b()({},H,H)),style:Oe})},Ae=(0,o.forwardRef)(ge)},31081:function(w,s,e){"use strict";e.d(s,{EMonacoEditorTheme:function(){return c.EMonacoEditorTheme},Languages:function(){return c.Languages},createWorkerQueue:function(){return c.createWorkerQueue}});var c=e(32981),b=e(8812);s.default=c.default},38040:function(){},37338:function(w,s,e){"use strict";e.d(s,{Z:function(){return c}});function c(){return new Worker(e.p+"prettier.worker.664c0a38.worker.js")}}}]);
