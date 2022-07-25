setTimeout(() => {
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        document.body.classList.add("dark");
        document.getElementById("logo").href = "./assets/logo-dark.png";
    }
}, 400);

class window_opener {
    open_window(url, width_percent = 0.84, height_percent = 0.84) {
        if (sessionStorage.hasOwnProperty("window_features")) {
            window.open(url, "_blank", sessionStorage.window_features);
            return;
        }

        let window_features = `resizable=yes,width=${
            screen.width * width_percent
        },height=${screen.height * height_percent},top=${
            (screen.height * (1 - height_percent)) / 2
        },left=${(screen.width * (1 - width_percent)) / 2}`;
        window.open(url, "_blank", window_features);

        sessionStorage.window_features = window_features;
    }
}

class modal_operator {
    constructor() {
        this.modals = document.getElementById("modals");
        this.body = document.body;
        this.share_btn = document.getElementById("sharer-btn");
        this.close_btn = document.getElementById("close-btn-svg-bg");

        this.share_btn.onclick = () => {
            this.show_share_options();
        };

        this.close_btn.onclick = () => {
            this.hide_share_options();
        };
    }

    show_share_options() {
        this.modals.classList.add("show");
        this.body.classList.add("stop-scrolling");
        this.modal_shown = true;
    }

    hide_share_options() {
        this.modals.classList.remove("show");
        this.body.classList.remove("stop-scrolling");
        this.modal_shown = false;
    }
}

let modal_operator_obj = new modal_operator();

class share_api {
    constructor() {
        this.window_opener_obj = new window_opener();
    }
    assign_tasks() {
        const btn_list = [
            "twtr",
            "fb",
            "wa",
            "lnkdn",
            "snpcht",
            "rdt",
            "pntrst",
            "mail",
        ];

        for (let index = 0; index < btn_list.length; index++) {
            document
                .getElementById(`${btn_list[index]}`)
                .addEventListener("click", () => {
                    this.open_window(btn_list[index]);
                });
        }
    }

    open_window(platform) {
        let title = `Create Google Workspace file easily using patelka2211/gdocs.`;
        let url = window.location.href;

        if (platform == "twtr") {
            url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                title
            )}&url=${encodeURIComponent(url)}`;
        } else if (platform == "fb") {
            url = `https://www.facebook.com/sharer/sharer.php?t=${encodeURIComponent(
                title
            )}&u=${encodeURIComponent(url)}`;
        } else if (platform == "wa") {
            url = `http://api.whatsapp.com/send?text=${encodeURIComponent(
                `${title}\n${url}`
            )}`;
        } else if (platform == "lnkdn") {
            url = `https://www.linkedin.com/cws/share?url=${encodeURIComponent(
                `${title}\n${url}`
            )}`;
        } else if (platform == "snpcht") {
            url = `https://snapchat.com/scan?attachmentUrl=${encodeURIComponent(
                url
            )}`;
        } else if (platform == "rdt") {
            url = `https://reddit.com/submit?title=${encodeURIComponent(
                title
            )}&url=${encodeURIComponent(url)}`;
        } else if (platform == "pntrst") {
            url = `https://www.pinterest.com/pin/create/button/?description=${encodeURIComponent(
                title
            )}&url=${encodeURIComponent(
                url
            )}&media=${"https://raw.githubusercontent.com/patelka2211/gdocs/main/assets/opengraph.jpg"}&method=button`;
        } else if (platform == "mail") {
            url = `mailto:?subject=${encodeURIComponent(
                title
            )}&body=${encodeURIComponent(url)}`;
        }

        this.window_opener_obj.open_window(url);
    }
}

let share_api_obj = new share_api();

share_api_obj.assign_tasks();

class open_apps_api {
    constructor() {
        this.window_opener_obj = new window_opener();
    }
    assign_tasks() {
        const btn_list = ["docs", "sheets", "slides", "forms"];

        for (let index = 0; index < btn_list.length; index++) {
            document
                .getElementById(`${btn_list[index]}`)
                .addEventListener("click", () => {
                    this.open_window(btn_list[index]);
                });
        }
    }

    open_window(platform) {
        let url;
        if (platform == "docs") {
            url = `https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fcreate&flowEntry=AccountChooser`;
        } else if (platform == "sheets") {
            url = `https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fdocs.google.com%2Fspreadsheets%2Fcreate&flowEntry=AccountChooser`;
        } else if (platform == "slides") {
            url = `https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fdocs.google.com%2Fpresentation%2Fcreate&flowEntry=AccountChooser`;
        } else if (platform == "forms") {
            url = `https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fdocs.google.com%2Fforms%2Fcreate&flowEntry=AccountChooser`;
        }

        let isMobile = false;
        if (sessionStorage.hasOwnProperty("isMobile")) {
            isMobile = JSON.parse(sessionStorage.isMobile);
        } else {
            if (
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
                    navigator.userAgent
                ) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                    navigator.userAgent.substr(0, 4)
                )
            ) {
                isMobile = true;
            }
            sessionStorage.isMobile = JSON.stringify(isMobile);
        }

        if (isMobile) {
            window.location = url;
        } else {
            this.window_opener_obj.open_window(url);
        }
    }
}

let open_apps_api_obj = new open_apps_api();

open_apps_api_obj.assign_tasks();
