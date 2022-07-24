setTimeout(() => {
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        document.body.classList.add("dark");
        document.getElementById("logo").href = "./assets/logo-dark.png";
    }
}, 400);

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
            )}&media=${"https://raw.githubusercontent.com/patelka2211/gdocs/main/assets/opengraph.png"}&method=button`;
        } else if (platform == "mail") {
            url = `mailto:?subject=${encodeURIComponent(
                title
            )}&body=${encodeURIComponent(url)}`;
        }

        let width_percent = 0.84,
            height_percent = 0.84;

        window.open(
            url,
            "_blank",
            `resizable=yes,width=${screen.width * width_percent},height=${
                screen.height * height_percent
            },top=${(screen.height * (1 - height_percent)) / 2},left=${
                (screen.width * (1 - width_percent)) / 2
            }`
        );
    }
}

let share_api_obj = new share_api();

share_api_obj.assign_tasks();

class open_apps_api {
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

        let width_percent = 0.84,
            height_percent = 0.84;

        window.open(
            url,
            "_blank",
            `resizable=yes,width=${screen.width * width_percent},height=${
                screen.height * height_percent
            },top=${(screen.height * (1 - height_percent)) / 2},left=${
                (screen.width * (1 - width_percent)) / 2
            }`
        );
    }
}

let open_apps_api_obj = new open_apps_api();

open_apps_api_obj.assign_tasks();
