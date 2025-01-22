FROM        redhat/ubi9
RUN         dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm -y
RUN         dnf install stress -y
ENTRYPOINT  ["stress", "--cpu", "1", "--io", "1", "--vm", "1"]
