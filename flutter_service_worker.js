'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2d3ac15166fb47c10c15f051b4ee0c96",
".git/config": "e15326d12950c97aa0bf2dc939d0906e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f4f579d5bc9fb89bb38af53c76c541f2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9771bdd88f9100a0f21c3aa0aaf92b90",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "331fb70a76a27688a92b5fc6b6715ab4",
".git/logs/refs/heads/main": "de9aa34d8b104013476836655e9a51ca",
".git/logs/refs/remotes/origin/main": "3f5af2b0a0b44397afd699aceed27d73",
".git/objects/01/d87c4915ad251193495a2ebaf59630fdc4b617": "528589f662487a0e634ecda2a2f12988",
".git/objects/03/94d23171fc2a1ae5895001775a518ee472c5e8": "78e23bb3997788ddc0b7263b80955b74",
".git/objects/05/dd5a853ea1599ac4ca9c04af9611c67ced9047": "ffa4e2109ce02919da5f55e1b1c5a17e",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "0bf42f3a0a34f14c1568e94e1218d28e",
".git/objects/07/8aa7032fbcea211c58e0133a23c762cb4c141c": "87df7f33398c3132b80a093b8d1aab60",
".git/objects/0a/785fde811f01dcbb100c462e13dc3eb4c8064d": "4914c67b058b60ad7d518e7e1c75be1e",
".git/objects/0b/50a6a2a99b33ad235b7cf823c56788a864d44a": "b659693bca27165b20abf18c71247aec",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "3db61a28ddf5b372a0bb9c1aebee3548",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "5b89f3cb7c594655e488320fc77990ee",
".git/objects/20/0c6ddc6eb7c9317b7b0bc9e44df59f1345009f": "aa5572c203de6c10ec90e3bd84f6b64d",
".git/objects/29/037e5d120d1344c2c4fd3bfa81aa29e2ffd024": "bf49aa72bef461f88925cfac0a62234b",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "8cd7e9ca99016151fd67939031fb3bfd",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "e2a5d81b824d6091d76bb5ecb8bf8a01",
".git/objects/36/37cd68995f2523e09156c69c1866c11549003c": "3d1c49436d78b8c884b1b562a693d12f",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "f6a1e3b656df3863b6998d73be3deeae",
".git/objects/37/9596d5213b84294bde5c2e2a4adc776830158e": "ac1b879ba12cc6a3297b638f0d6e19aa",
".git/objects/3c/2791fc54bd53b95b8c5cb2e86fa9cc5711e577": "f333d8db1bccb7ee780eaea6bd98cb63",
".git/objects/3c/318a566ef447bfc56cc3614b04dda7d58e1854": "bc8e98f945fac01b9716df7c2a2ab38e",
".git/objects/3f/1ca0885a9684b96faa62c7958b3ef5100a7f2a": "114475ce01a68c09bd303fd6eba15581",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "54f8ff0d387380c0b9c25486e6bb6bce",
".git/objects/45/c4f09741e9ed7a1116bb95d758255587b5a6f1": "571c9e473082577f4bd87576fcc5ff3b",
".git/objects/4a/3b64fd79c857c23fade069d1cae800808cd536": "eab93b9425530466afd2dc3c5c656c54",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d1bd03faa2307e273558a266af9137e5",
".git/objects/54/d609d914f78950500883e6969433b660622414": "7085e03c7b40951af6ad43e5526039bf",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "200a539a6db680f00ebda88e58ec57d8",
".git/objects/56/d53384981a4277c7a03ea47584efbbd72f6d1e": "f687b5ded29c64b42a8bbd3f6adcbcf3",
".git/objects/5c/feb58bca97588d07e04116e8f0343b1f1bb29e": "2a9d1c11ba96c4437fbc8f1c7b5add42",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "322d3378d5c61d470e3cddea51613ea6",
".git/objects/5f/f23c9bbefe57280aa54d58411bff53077ee19d": "8d93834551d4a5d0cdf58b4b61373745",
".git/objects/62/d09b8221fb59ebb772816f5ff6f9976095615a": "29c26f30c8bb95e632d9c218e532a4b9",
".git/objects/67/880fdc7a2b3cf460fb6a036b7e984f8ab6a361": "1ad55a4b4cdd489377ba543c9f5c423d",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "5cdc58f38828d85faf60d344448cff42",
".git/objects/68/6580ee6e5ce13e41e4170d6b8942297f6e612c": "e172d9a625608d13f23361e92f6a73d3",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "9c7ac2161ab4d41eb72995f10abe8780",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "454a10f9082528f531c074c87e154f22",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "510e1327b3e01098af74560b38416c5d",
".git/objects/6c/d8e00c6f985780f04b16b2baf7ab3f750ae5c5": "2b42400c81a23d04437821cf5abae0b1",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "5e80c82718faee206224e26e47316cd8",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "d08abc64adcad35209ccf7f4a231ffba",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "3c8ba246dfaf5e6cdaaea434b3d04156",
".git/objects/73/d3ee2109c4ef403a65cfa48e65f6b2e66a62a9": "f6cfa4dfae95d41c5e7097fbae081961",
".git/objects/74/c3c250f2b90b997b61635a4a22ac94f557d050": "c4447735470f80bd5213189dfcd8cb5c",
".git/objects/79/6ac4453cb75033a6057472a535fe6860b36220": "c1e401d21ab3e817a598bfbd5d94e219",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "246e3e2b7e888b83fa64eaff60e2ff86",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "e15e7c29e3ba2dc11ccd41a6296eb02a",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "87a2ff7f600b6daec33558e039bc32c8",
".git/objects/85/2c7135a38ad9cd9d08e3cb3ae14781447dec06": "098054d4743995bee606df60f1eb8fe8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/89/33ac36b61188b12a5b61c86c2efa93634ce366": "67ab8986e3b70cb6916db9c41d9ee68c",
".git/objects/8b/f4f539414ab76fdb8a13e8b27b121dbc88f54d": "0afe38b6c2719df0d6a3a1e17e91bd60",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "63242b0c4e2a03e33006e63cecaf7cdc",
".git/objects/90/437118cf973d1940d061ce1619d27ab044fe55": "a166d875d1a99ed45ec83834b867af7f",
".git/objects/90/7feac74f1fd12510cf4c9ca50e40b410a50a3f": "64671510eae87562e68e0aea025cbdc8",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "9041fce5b5c543abd67e8ef33b463185",
".git/objects/92/9e137a0c3085e1967753a54fc940d2b6536375": "0e581dc865286030f51f61bdabfc59c9",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "08d21403c99dc2568ae44628ba002afc",
".git/objects/96/e2e81a3d1e00f2638000e2110075d3af23cfbe": "09ff52c0292771a7530aaab6ba342649",
".git/objects/97/4fa4456e092a8f1375c7c26c8ff5557ec82ca0": "50012ff92b928638678a9f8db9e5871d",
".git/objects/9d/6d3c5e46a5973ea6e798e744d999da3fb8f542": "579d149b46ae9dc7fd9dd5c26ef9b008",
".git/objects/9e/4c19b46fedcc94f82d08adb5b34c5188a4fb8f": "f93a7dacb23e9c3ac950b296d2a8d0f9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "d3184f8d69b8aa198a5a7a210764ede9",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "d916aa57365e51a09961834873e08f50",
".git/objects/a6/cd22fe67a92a406706ec69c0f578ebb1acef4b": "a85669fbe05962a00e26866fed976c8f",
".git/objects/a8/0cf021c5ed8c548d884c7acb1eefcb393f9da4": "5eac9835f65ef3940f45669e7d491bac",
".git/objects/a8/a4a9e9c4e7e4604d989b0282ad1314c6c9a3a9": "64875c4b42200683ec815fc807f3a245",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "a97b1067ce25e8f45f4f49a4a8117ed6",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "f2a97922222df8c897b1a0151f9288ad",
".git/objects/ad/770872cb231ab7952c7aa26817882cc3ac2c70": "11e70522c87b37a6e23316b2a483a24f",
".git/objects/ad/785630ef780e3ca08d1b812f16702e46103295": "27a46a591816ad32a5fe02ecd3abbafc",
".git/objects/b1/e69f4de0bb82f9f215dd5c3a45e70865fdcc57": "5dcfc45365510547946a7dd66d6f6f75",
".git/objects/b3/302ca6d464f43562bbac8e9c1beb936adec3e5": "d6c60be637bb47b2b8961dc9f1a33188",
".git/objects/b5/0c8124c064f306ed873b4d8898dda2c7846555": "43205a82360a877ce20841aaf4537531",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "5fbdbcc2e1d8e32aa8d618046ddd679e",
".git/objects/be/95ba533af9e5b7c5ffd3b1d53f5ea1e8293e5e": "45ede3889584d3da62c2573134fb7c3a",
".git/objects/c1/21febd947c469613376f921a095caf18a474e2": "3dc1ff7aa3e6aabe2b0ec6b6138a6570",
".git/objects/c4/ef59bd4357cb1956b76fa45eca7971e7da5ad0": "e169604a7bbdd68e92dd9b7dabd91a5c",
".git/objects/c4/f4f9bd1354a3939d3c4b97f822a56868d902fb": "b2794b2b52522f5ac7b4ab6ac0e096b3",
".git/objects/cb/4b4fc3d021e807a0869b76e252d41e846510f7": "f2421017c07909cfa18e5f1d5112473e",
".git/objects/cc/d5604b8243647eb37eaeeee83487b0933d1160": "b7ee1dae026489f7716d8fd3a29ce61e",
".git/objects/ce/01ec9fe7a4ae78cb6b2bfe38766b1aa7d0ae7c": "b9c6a93565ab28b60920fa80b09deaca",
".git/objects/ce/ac75d75e6bcaf56823bacd051bd9f135af6f4a": "ff6dca59455a57153c4f5f4da1132fa1",
".git/objects/cf/69196c6be758f4927c629ade38d33eec6047a3": "2b9feeddb937aec6c8988980f8d9ba92",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "37cff1f68cb5f0ab3e9ab2ce84cd3494",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d7/e7eb122345206ef28f5d72a42a74c55ef0296a": "9de2a4482335888852b88a61a13edc04",
".git/objects/da/a23d34e1fde826df1f29c06791698f41040851": "54119e9c433324422f42196db3fad30f",
".git/objects/da/cd6e523e408595d3fb4e5a16322b42797ea3d2": "ea36378f681d43cea76958054d9784e2",
".git/objects/db/c53ea189ee9210a7256ba91a2b3c28066d92a3": "9094c7b4b23cc1f014af3f038d1da819",
".git/objects/de/ad6d648e8dbbb4a00fb8ea570b7d7dafc6edf9": "a4423d620a18ea84bf886d851a5f724e",
".git/objects/e0/55e4a3e7d7ff1a4c1b2967d0a2e521cc1aed46": "d3e162ab5aa34ae903c1ccacdb6fef29",
".git/objects/e1/020a7dcca99f951bdb7966a2f98415ad870c4b": "536be824c71fb7fdd4b280aea43e6f60",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "3c4126b3f3755a668f137ee0f09f5974",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "b1bfda8eb29e326a32fc89e9c85ae8dd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/f1/f8c1c27fc38525965e9a81dbdb570a4fcf456d": "a79558750d40b818cc86ce456210f1a8",
".git/objects/f4/2ea35d9d3b104c1dfac305ebc0b6bdc17c2038": "624ef9266ef22ac7fc185f5d90c193e3",
".git/objects/f5/21d521c7ab5a619523335982f6d6337b0927cf": "7fa8bc7d2773e6135959424d5b933fdd",
".git/objects/f7/7ccac547e1bd82aa2075ef9da4dc21f28cc698": "244e11c86784665612304c6f58d828c6",
".git/objects/f7/e8dbbfa1bcb637223558eb1bf1100de64f7cd5": "f4204f4842e16960c56088cded74a8d7",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "8b1b72eb5a0628b5cb8bf5eeaab7a972",
".git/ORIG_HEAD": "c9e5028338a109e7d45993f9054c72da",
".git/refs/heads/main": "71df0a2e1ba6bddaa54ebe98690c448e",
".git/refs/remotes/origin/main": "71df0a2e1ba6bddaa54ebe98690c448e",
"assets/AssetManifest.json": "43ba86b340fbbeedd1ad3dc0d1cdaa42",
"assets/assets/images/bg.jpg": "5dfb0677df495b2874dc52f20ac7ca84",
"assets/assets/images/bg2.jpg": "3d2433a6bba8dc76804f4b7d56b9ef14",
"assets/assets/images/bg3.jpg": "0123d628dc16b83eef547d5afdcc36ea",
"assets/assets/images/bg4.webp": "8fef97672dc88099731a7980e7d80a88",
"assets/assets/images/bg5.jpeg": "c43f7eac43097e166413c14e1613fd0b",
"assets/assets/images/bg6.jpg": "5a7a5d0838724ca517116b80b7310c56",
"assets/assets/images/bg7.jpeg": "ccb5b6b760f744d41c10ab1be93594f8",
"assets/assets/images/loading.gif": "a6178f443133606fe19006604d0cafb5",
"assets/assets/images/logo.png": "0291ea4ae45a15265255b205e046c91b",
"assets/assets/svg/payment_method.svg": "0d8894ec6b5272d10381b8f1c6fd210f",
"assets/FontManifest.json": "e6c885beacfeae342c10366f04d84cf2",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "60b546be5702dab3800a04138769e7e4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "ca9ce9ff0676a9b04ef0f8a3ad17dd08",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "bc4a0f2406aeadaf560b641c5617c18a",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "e275cb040a1d217b0f8f54b8fbd2ef52",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"CNAME": "33149e8b416bb488e5a5aa975b2faca7",
"favicon.ico": "51b0dd3aed4644852b54e5032891a832",
"flutter.js": "f916451a1f92b11ff8e28c4f8286d327",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ac58e5c224b5c04c44aa43963b61377d",
"/": "ac58e5c224b5c04c44aa43963b61377d",
"main.dart.js": "785f46e863566e0be13e7f29a2180d28",
"manifest.json": "b05b0e973c857d2f9295e2f1784c59e9",
"README.md": "7414e3f4b1274a1da24d8a092c4448dd",
"version.json": "b68e33f3964207a4435df1234f1d02da"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
